const mongoose = require("mongoose");
const config = require("./config.json");

async function mongoDB() {
  await mongoose.connect(config.mongodbconnection);
}
module.exports = mongoDB;
