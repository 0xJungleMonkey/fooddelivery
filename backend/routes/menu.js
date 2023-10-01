const express = require("express");
const router = express.Router();

router.post("/items", (req, res) => {
  try {
    console.log(global.menu_items);
    res.send([global.menu_items]);
  } catch (error) {
    console.log(error.message);
    res.send("server error");
  }
});
module.exports = router;
