const express = require("express");
const router = express.Router()
const multer = require("multer")
const path = require("path");
const NewsLarge = require("../models/newsLarge");

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(`./public/uploads`));

    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    }
})

const upload = multer({ storage: storage })

//adding a news
router.post("/addnewslarge", upload.single("newsimg"), async (req, res) => {
    const { title, author, homedesc, newsimg, desc } = req.body;
    try {
        // const baseURL = `${req.protocol}://${req.get('host')}`;
        // const beforenewsimg = `${baseURL}${newsimg}`;
        const newslarge = await NewsLarge.create({
            title, author, homedesc, desc,
            newsimg
        })
        return res.json({ success: true, newslarge, message: "Updated Successfully" });

    } catch (error) {
        return res.status(500).send({ success: false, message: "some Internal Error" });
    }
})

//fetch all large news

router.get("/fetchnewslarge", async (req, res) => {
    try {
        const newslarge = await NewsLarge.find({}).sort({ createdAt: -1 });
        return res.status(200).json({ success: true, message: "Successfully fetch all the blogs", newslarge })
    } catch (error) {
        return res.status(500).send({ success: false, message: "some Internal Error" });
    }
})

//fetch all large news by id
router.get("/fetchnewslargeid/:id", async (req, res) => {
    try {
        const id = req.params.id
        const newslarge = await NewsLarge.findById(id);
        return res.status(200).json({ success: true, message: "Successfully fetch the blog by id", newslarge })
    } catch (error) {
        return res.status(500).send({ success: false, message: "some Internal Error" });
    }
})

module.exports = router

