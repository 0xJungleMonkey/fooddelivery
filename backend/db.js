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
    const data = await fetchedData.find({}).toArray();

    const foodCategory = await mongoose.connection.db.collection("category");
    const catData = await foodCategory.find({}).toArray();

    global.menu_items = data;
    global.category = catData;
    console.log(global.category);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    throw error;
  }
}

async function initialize() {
  await connectToMongoDB();
  await fetchDataFromMongoDB();
}

module.exports = { connectToMongoDB, fetchDataFromMongoDB, initialize };

