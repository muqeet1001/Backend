const app = require("express");
const server = app();
server.use(app.json());
server.post('/notes',(req,res)=>{
  console.log(req.body)
});
 

server.listen(3000,()=>{
    console.log("server is runing in port 3000");
})
