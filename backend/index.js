const express = require("express");
const app = express();
const port = 5001;
var cors = require("cors");
const { connectToMongoDB } = require("./db");
connectToMongoDB()
  .then(() => {
    app.use(cors());
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    app.use(express.json());
    app.get("/api", (req, res) => {
      res.send("Hello World!");
    });
    app.use("/menu", require("./routes/menu"));
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = app;
