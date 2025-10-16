const express = require('express');
const routes = express.Router();
routes.get('/home',(req,res)=>{
res.json(
    {msg:"Hellow i am the api from home"}
)
})

module.exports = routes;