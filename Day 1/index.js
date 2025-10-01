
const http = require("http");
const fs = require("fs")
const server = http.createServer((req, res) => {
  const log =`${Date.now()}: New Req Received\n`;
  fs.appendFile("log.txt", log,(err)=>{
    if(err) console.log(err);
  });
  res.end("Hellow from server");
});

server.listen(3000, () => {
  console.log("server is running");
});
