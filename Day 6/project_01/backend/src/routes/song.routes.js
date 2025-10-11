 const express = require('express');
const multer = require('multer');
const uploadFile = require('../service/storage.service');
const songModel = require("../models/song.model")
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/song', upload.single("audio"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const fileData = await uploadFile(req.file);
    const song = await songModel.create({
        title:req.body.title,
        artist:req.body.artist,
        audio:fileData.url,
        mood:req.body.mood,
    })

    console.log("Uploaded file:", fileData);
    console.log("Form data:", req.body);

    res.json({
      message: "File uploaded successfully ✅",
      fileData,
      song
    });
  } catch (error) {
    console.error("Upload failed:", error);
    res.status(500).json({ error: error.message || "Upload failed" });
  }
});

router.get('/song',async(req,res)=>{
   const {mood} = req.query;
   const songs= await songModel.find({
    mood:mood
   })

   res.status(200).json({
    msg:"Songs fetched successfully",
    songs
   })
})
module.exports = router;

