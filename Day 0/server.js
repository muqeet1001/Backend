const express = require("express"); // server is imported
const app = express(); // server create hogaya
app.get("/", (req, res) => {
  res.send("server is started"); //api
});
app.listen(3000, () => {
  console.log("hellow"); //server start hogaya
});
