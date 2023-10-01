const express = require("express");
const app = express();
const port = 5001;
const mongoDB = require("./db");
var cors = require("cors");

mongoDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/user"));
app.use("/menu", require("./routes/menu"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
