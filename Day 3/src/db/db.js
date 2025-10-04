const mongoose = require('mongoose');
//server database se connnect hoga in db.js
function connnectToDB(){
    mongoose.connect('mongodb+srv://abdul00muqeet_db_user:x8yfyDohlDAlWlMQ@cluster0.vv5xxxv.mongodb.net/backend').then(()=>{
        console.log("db is connect");
    })
}

module.exports = connnectToDB