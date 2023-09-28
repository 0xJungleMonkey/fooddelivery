const express = require("express");
const router = express.Router();
const User = require("../models/User");
router.post("/createuser", async (req, res) => {
  try {
    await User.create({
      name: "Xinqi Davis",
      password: "123455",
      email: "xinqidavis@gmail.com",
      address: "Oldsmar, Fl,US ",
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
