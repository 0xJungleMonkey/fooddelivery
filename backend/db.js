const mongoose = require("mongoose");
const config = require("./config.json");

async function mongoDB() {
  try {
    await mongoose.connect(config.mongodbconnection, { useNewUrlParser: true });

    console.log("connected");
    const fetched_data = await mongoose.connection.db.collection("recipes");
    const data = await fetched_data.find({}).toArray();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}
module.exports = mongoDB;
