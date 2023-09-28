const express = require("express");
const router = express.Router();
const User = require("../models/User");
router.post("/createuser", async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      address: req.body.address,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
