require('dotenv').config();
const mongoose = require('mongoose');
function connectToDb(){
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("db is connected");
    })
}

module.exports = connectToDb;