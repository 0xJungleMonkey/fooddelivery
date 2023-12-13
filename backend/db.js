const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.mongodbconnection, {
      useNewUrlParser: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

async function fetchDataFromMongoDB() {
  try {
    const fetchedData = await mongoose.connection.db.collection("menu_items");
    console.log(1);
    const data = await fetchedData.find({}).toArray();
    console.log(2);

    const foodCategory = await mongoose.connection.db.collection("category");
    console.log(3);

    const catData = await foodCategory.find({}).toArray();
    console.log(4);

    global.menu_items = data;
    console.log(5);
    global.category = catData;
    console.log(6);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    throw error;
  }
}

module.exports = { connectToMongoDB, fetchDataFromMongoDB };
