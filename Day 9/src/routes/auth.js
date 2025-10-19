const express = require("express");
const userModel = require('../model/index.Schema');
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
require("dotenv").config();
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser());

router.post("/singup", async (req, res) => {
  const { name, password } = req.body;
   const user = await userModel.create({
    name:name,
    password:password
   })
    const token = jwt.sign({
        id:user._id,
        name:user.name
    },process.env.JWT_Secret);
  res.cookie("token",token);
  res.status(201).json({ message: "User added successfully", user });
});

router.post("/login",async(req,res)=>{
    const {name,password} = req.body;
    const user = await userModel.findOne({
      name:name  
    })
    if(!user){
        res.status(401).json({
            msg:"User not found"
        })
    }
    const ispassword = password === user.password;
    if(!ispassword){
        return res.json("wrong password");
    }
    else{
        return res.json("login succefully")
    }

    })

router.get('/login',async(req,res)=>{
     const {token} = req.cookies;
     if(!token){
        return res.json("unauthrorized")
     }
     const decoded = jwt.verify(token,process.env.JWT_Secret);
     const user = await userModel.findOne({
        _id:decoded.id
     })
     res.send(user)
})
module.exports = router;
