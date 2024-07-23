const express = require("express");
const router = express.Router()
const multer = require("multer")
const path = require("path");
const NewsSmall = require("../models/newsSmall");

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
router.post("/addnewssmall", upload.single("newsimg"), async (req, res) => {
    const { title, author, homedesc, newsimg, desc } = req.body;
    try {
        // const baseURL = `${req.protocol}://${req.get('host')}`;
        // const beforenewsimg = `${baseURL}${newsimg}`;
        const newssmall = await NewsSmall.create({
            title, author, homedesc, desc,
            newsimg
        })
        return res.json({ success: true, newssmall, message: "Updated Successfully" });

    } catch (error) {
        return res.status(500).send({ success: false, message: "some Internal Error" });
    }
})

//fetch all the small news
router.get("/fetchnewssmall", async (req, res) => {
    try {
        const newssmall = await NewsSmall.find({}).sort({ createdAt: -1 });
        return res.status(200).json({ success: true, message: "Successfully fetch all the blogs", newssmall })
    } catch (error) {
        return res.status(500).send({ success: false, message: "some Internal Error" });
    }
})

//fetch all small news by id
router.get("/fetchnewssmallid/:id", async (req, res) => {
    try {
        const id = req.params.id
        const newssmall = await NewsSmall.findById(id);
        return res.status(200).json({ success: true, message: "Successfully fetch the blog by id", newssmall })
    } catch (error) {
        return res.status(500).send({ success: false, message: "some Internal Error" });
    }
})

module.exports = router

