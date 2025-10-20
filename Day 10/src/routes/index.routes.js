const express = require("express");
const UserModel = require("../module/model.schema");
const jwt = require("jsonwebtoken");
const routes = express.Router();

//singup route
routes.post("/signup", async (req, res) => {
  try {
    const { name, password } = req.body;

    const userexist = await UserModel.findOne({ name: name });
    if (userexist) {
      return res.status(400).json({
        message: "User already exists, you can login",
      });
    }

    const newuser = await UserModel.create({
      name: name,
      password: password,
    });

    res.status(201).json({
      message: "User created successfully",
      user: newuser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});
//login
routes.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;
    const User = await UserModel.findOne({
      name: name,
    });

    if (!User) return res.json("user do not exists");
    if (password != User.password) res.json("Wrong password");
    const token = jwt.sign(
      {
        id: User._id,
        name: User.name,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);

    return res.json({ message: "Login successful" });
  } catch {
    return res.json("internal error");
  }
});
//show data through cookies
routes.get("/userdata", async(req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized - No token found" });
  }
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  const {id} = decode;
  const Userdata = await UserModel.find({
    _id : id
  })
  return res.json(Userdata);
});
//logout clrae cookies
 routes.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Cookie cleared successfully" });
});



module.exports = routes;
