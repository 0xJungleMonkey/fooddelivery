const job = require("~/cron.js");
const express = require("express");
const app = express();
const port = 5001;
const cors = require("cors");
const { connectToMongoDB, fetchDataFromMongoDB } = require("./db");
const menuRouter = require("./routes/menu");
job.start();
// Use CORS middleware
app.use(cors());

// Add JSON parsing middleware
app.use(express.json());

// Define a function to initialize the app
async function initializeApp() {
  try {
    // Ensure that MongoDB connection is established before proceeding
    await connectToMongoDB();

    // Fetch data from MongoDB
    await fetchDataFromMongoDB();
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });
    // Use the menuRouter for requests to /menu/items
    app.use("/menu", menuRouter);
    app.use("/user", require("./routes/user"));
    // Start listening after successful connection, data fetching, and route setup
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to initialize the application:", error);
    process.exit(1); // Exit the process if initialization fails
  }
}

// Call the initializeApp function to start the application
initializeApp();

// const express = require("express");
// const app = express();
// const port = 5001;
// var cors = require("cors");
// const { connectToMongoDB } = require("./db");
// connectToMongoDB();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.use("/menu", require("./routes/menu"));
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

module.exports = app;
