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

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.use(express.json());
app.use("/api", require("./routes/createUser"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
