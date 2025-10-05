const mongoose = require('mongoose');

function connectTodb(){
    mongoose.connect('mongodb+srv://abdul00muqeet_db_user:NF5JVLMh51tjxSSj@cluster0.vv5xxxv.mongodb.net/muqeet').then(()=>{
        console.log("db is connect");
    })
}

module.exports = connectTodb;