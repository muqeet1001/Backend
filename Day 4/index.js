const express = require('express');
const connectToDB = require('./src/db/db');

connectToDB();
const app = express();

app.listen(3000,()=>{
    console.log("server is running in port 3000");
})