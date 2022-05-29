require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    process.env.dbLINK,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected")
  );
};