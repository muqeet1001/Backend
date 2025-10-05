const mongoose = require('mongoose');
function connectTodb (){
    mongoose.connect('mongodb+srv://mqt:hqcLwTRdBsz2rFOG@cluster0.vv5xxxv.mongodb.net/notes').then(()=>{
        console.log("db is connected");
    })
}
module.exports = connectTodb;