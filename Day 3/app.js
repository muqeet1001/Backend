const express = require('express');
const connnectToDB = require('./src/db/db');

connnectToDB();
const app = express();
let notes = [];
app.use(express.json())
app.post('/notes',(req,res)=>{
  let body = req.body;
  notes.push(body);
  res.json({msg:"data is pushed"});
})

app.get('/notes',(req,res)=>{
    res.json(notes);
})
app.listen(3000,()=>{
    console.log("server is running is port 3000");
})