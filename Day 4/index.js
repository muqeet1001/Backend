const express = require('express');
const connectTodb = require('./src/db/db');
const noteModel = require('./src/model/note.model')
const app = express();
app.use(express.json());
connectTodb();
app.post('/notes',async (req,res)=>{
    const {title,content} = req.body
     await noteModel.create({
        title,content
    })
    res.json("note is posted");
})
app.get("/notes",(req,res)=>{
    res.json({
        msg:"hi" 
    })
})
app.listen(3000,()=>{
    console.log("server is running in port 3000")
})