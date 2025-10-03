const express = require("express");
const app = express();
app.use(express.json());
let notes =[];
app.post('/notes',(req,res)=>{
    const body = req.body;
     notes.push(body);
     res.json({
        message:"note created succefully"
     })
})
 app.use((req,res,next)=>{
    console.log("hellow form middle ware");
    next();
 })
app.get('/notes',(req,res,next)=>{
    res.json(notes);
})

app.delete('/notes/:index' ,(req,res)=>{
    const index = req.params.index;
    delete notes[index];
    res.send("Deleter succefully");
})

app.patch('/notes/:index',(req,res)=>{
   const index = req.params.index;
   const {title} = req.body;
   notes[index].title = title;
   res.send("updates succesfully");
})

app.listen(3000, () => {
  console.log("server is running in port 3000");
});
