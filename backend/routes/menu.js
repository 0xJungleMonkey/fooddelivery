const express = require("express");
const router = express.Router();

router.post("/items", (req, res) => {
  try {
    res.send([global.menu_items, global.category]);
  } catch (error) {
    console.log(error.message);
    res.send("server error");
  }
});
module.exports = router;
