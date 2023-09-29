const express = require("express");
const router = express.Router();

router.post("/dishes", (req, res) => {
  try {
    console.log(global.food_items);
    res.send([global.food_items]);
  } catch (error) {
    console.log(error.message);
    res.send("server error");
  }
});
