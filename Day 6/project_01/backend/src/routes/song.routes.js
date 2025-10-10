const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadFile = require('../service/storage.service')
const upload = multer({storage:multer.memoryStorage()});
router.post('/song',upload.single("audio"),async(req,res)=>{
      const fileData = await uploadFile(req.file);
      console.log(fileData);
      res.json({
        msg:"data upload sussefully"
      })
})

module.exports = router;