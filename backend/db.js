const mongoose = require("mongoose");
const config = require("./config.json");

async function mongoDB() {
  try {
    await mongoose.connect(config.mongodbconnection, { useNewUrlParser: true });
    console.log("connected");
    //Storing the menu items and food categories in global variables (global.menu_items and global.category) suggests that this data is intended to be accessible throughout the application's lifecycle.
    const fetched_data = await mongoose.connection.db.collection("menu_items");
    const data = await fetched_data.find({}).toArray();

    const foodCategory = await mongoose.connection.db.collection("category");
    const catData = await foodCategory.find({}).toArray();

    global.menu_items = data;
    global.category = catData;
  } catch (err) {
    console.error("Error:", err);
  }
}
module.exports = mongoDB;
