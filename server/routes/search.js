const express = require("express");
const NewsLarge = require("../models/newsLarge");
const router = express.Router()


router.get("/searchdata", async (req, res) => {
    const search = req.query.search;
    try {
        if (search === null){
            return res.status(200).json({success: false,message: "No Search is present"})
        }
        const result = await NewsLarge.find({
            $or: [
                { title: { $regex: search, $options: "i" } },
                { homedesc: { $regex: search, $options: "i" } }
            ]
        });
        if(result.length !== 0){
            return res.status(200).json({ success: true, message: "Successfully fetch", result })
        }
        return res.status(200).json({ success: false, message: "Not Found " })
    } catch (error) {
        return res.status(500).send({ success: false, message: "some Internal Error" });
    }
})

module.exports = router