const express = require("express");
const router = express.Router();
const { fetchDataFromMongoDB } = require("../db");

router.post("/items", async (req, res) => {
  try {
    // Ensure that data is fetched before responding
    await fetchDataFromMongoDB();
    res.send([global.menu_items, global.category]);
  } catch (error) {
    console.log(error.message);
    res.send("server error");
  }
});
module.exports = router;
