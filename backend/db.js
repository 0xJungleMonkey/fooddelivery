const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
function connectToMongoDB() {
  try {
    mongoose.connect(process.env.mongodbconnection, {
      useNewUrlParser: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

function fetchDataFromMongoDB() {
  try {
    const fetchedData = mongoose.connection.db.collection("menu_items");
    const data = fetchedData.find({}).toArray();

    const foodCategory = mongoose.connection.db.collection("category");
    const catData = foodCategory.find({}).toArray();

    global.menu_items = data;
    global.category = catData;
    console.log(global.category);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    throw error;
  }
}

module.exports = { connectToMongoDB, fetchDataFromMongoDB };
