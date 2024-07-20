const express = require("express");
const router = express.Router()
const multer = require("multer")
const path = require("path");
const Internship = require("../models/internship");

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

//adding a internship
router.post("/addintern", async (req, res) => {
    const { title, author, homedesc, internimg, desc } = req.body;
    try {
        // const baseURL = `${req.protocol}://${req.get('host')}`;
        // const beforenewsimg = `${baseURL}${newsimg}`;
        const internship = await Internship.create({
            title, author, homedesc, desc,
            internimg
        })
        return res.json({ success: true, internship, message: "Updated Successfully" });

    } catch (error) {
        return res.status(500).send({ success: false, message: "some Internal Error" });
    }
})

//fetch all internship

router.get("/fetchintern", async (req, res) => {
    try {
        const internship = await Internship.find({}).sort({ createdAt: -1 });
        return res.status(200).json({ success: true, message: "Successfully fetch all the blogs", internship })
    } catch (error) {
        return res.status(500).send({ success: false, message: "some Internal Error" });
    }

})

//fetch all internship by id
router.get("/fetchinternid/:id", async (req, res) => {
    try {
        const id = req.params.id
        const internship = await Internship.findById(id);
        return res.status(200).json({ success: true, message: "Successfully fetch the blog by id", internship })
    } catch (error) {
        return res.status(500).send({ success: false, message: "some Internal Error" });
    }
})

module.exports = router