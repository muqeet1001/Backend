const express = require("express");
const userModel = require('../model/index.Schema');
const { route } = require("../app");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/singup", async (req, res) => {
  const { name, password } = req.body;
   const user = await userModel.create({
    name:name,
    password:password
   })

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
  

module.exports = router;
