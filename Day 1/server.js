const app = require("express");
const server = app();
 
server.get("/home", (req,res)=>{
    res.send("Welcome to home page")
})

server.listen(3000,()=>{
    console.log("server is runing in port 3000");
})
