const mongoose = require('mongoose');

const noteSchema =new mongoose.Schema({
    title:String,
    content:String
})
const noteModel = mongoose.model("mqt",noteSchema);

module.exports = noteModel;