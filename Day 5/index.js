const express = require('express');
const connectTodb = require('./src/db/db')
const noteModel = require('./src/model/notes.model');
 
const app = express();
app.use(express.json());
connectTodb();
app.post('/notes',async(req,res)=>{
    const {title,content} = req.body;
    await noteModel.create({
        title,content
    })
    console.log(title,content);
    
    res.json({
        msg:"note add succefully"
    })
})

app.get('/notes',async(req,res)=>{
    const notes =await noteModel.find();
    res.json(notes)
})

app.delete("/notes/:id",async(req,res)=>{
    const noteid = req.params.id;
    await noteModel.findOneAndDelete({
        _id:noteid
    })
    res.json({
        msg:`note delete of id ${noteid}`
    })
})

app.patch("/notes/:id",async(req,res)=>{
    const id = req.params.id;
    const {title} = req.body;
    await noteModel.findOneAndUpdate({
        _id:id
    },{
        title:title
    })
    res.json("update")
})
app.listen(3000,()=>{
    console.log("server is running in port 3000");
})