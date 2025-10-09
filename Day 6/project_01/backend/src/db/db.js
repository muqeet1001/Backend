const mongoose = require('mongoose');
 
function ConnectToDb(){
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("db is connected");
    })
}

module.exports = ConnectToDb;