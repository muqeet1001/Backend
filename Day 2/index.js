const express = require("express");
const user = require("./MOCK_DATA.json");
const fs = require('fs');
const server = express();
const use=[];
server.use(express.urlencoded({extended:false}))
server.get("/", (req, res) => {
  res.send("Welcome to home page");
});

server.get("/user", (req, res) => {
  const html = `
  <ul>
  ${user.map((item) => `<li>${item.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

server.post('/user',(req,res)=>{
  const body = req.body;
  user.push({id:user.length+1, ...body});
  fs.writeFile('./MOCK_DATA.json',JSON.stringify(user),(err,data)=>{
    return res.json({statues:"pending"})
  })
})

server.listen(3000, () => {
  console.log("Server is running in port 3000");
});
