const express = require("express");
const app = express();
const port = 5001;
// const mongoDB = require("./db");
var cors = require("cors");
const { connectToMongoDB } = require("./db");
connectToMongoDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(cors());
app.use(express.json());
app.get("/api", (req, res) => {
  res.send("Hello World!");
});
app.use("/menu", require("./routes/menu"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
module.exports = app;
