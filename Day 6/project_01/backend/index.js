require('dotenv').config();
const express = require('express');
const ConnectToDb = require('./src/db/db');
const server = express();
ConnectToDb();
server.listen(3000,()=>{
    console.log("server is running in port 3000");
})

module.exports = server;