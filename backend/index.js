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
app.get("/api", (req, res) => {
  res.send("Hello World!");
});
app.use("/menu", require("./routes/menu"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
module.exports = app;
// const express = require('express')
// const app = express()
// const PORT = 4000

// app.get('/home', (req, res) => {
//   res.status(200).json('Welcome, your app is working well');
// })

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

// // Export the Express API
// module.exports = app
