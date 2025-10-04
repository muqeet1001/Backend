const express = require("express");
const connectToDB = require("./src/db/db");
const noteModel = require("./src/models/note.model");
connectToDB();
const app = express();
app.use(express.json());
app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  await noteModel.create({
    title,
    content,
  });
  res.json({
    msg: "note is created and stored in db",
  });
});

app.get('/notes',async(req,res)=>{
    const notes =  await noteModel.find();
    res.json({
        notes
    })
})
app.listen(3000, () => {
  console.log("server is running in port 3000");
});
