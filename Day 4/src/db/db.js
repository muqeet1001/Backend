const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect("mongodb+srv://abdul00muqeet_db_user:x8yfyDohlDAlWlMQ@cluster0.vv5xxxv.mongodb.net/day4").then(()=>{
        console.log("db connected");
    })
}

module.exports=connectToDB