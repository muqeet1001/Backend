const mongoose = require("mongoose");

async function connectToDb() {
  try {
    return await mongoose.connect(
      "mongodb+srv://mqt:EDAu4QdigChGv5aP@cluster0.vv5xxxv.mongodb.net/user"
    ).then(()=>console.log("Connected to db")
    )
  } catch (err) {
    console.error("DB connection failed:", err);
    throw err;
  }
}

module.exports = connectToDb;
