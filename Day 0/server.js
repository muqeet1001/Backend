const { log } = require("console");
const express = require("express");
const app = express();
app.get("/home", (req, res) => {
  res.send("welcome to home page");
});
app.get("/muqeet", (req, res) => {
  res.send("welcome to Muqeet world");
});
app.listen(3000, () => {
  console.log("hellow ji");
});
