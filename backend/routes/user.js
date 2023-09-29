const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
router.post(
  "/createuser",
  body("email").isEmail(),
  body(
    "password",
    "The password must be 5+ chars long and contain a number"
  ).isLength({ min: 5 }),
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
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
  }
);
router.post("/login", async (req, res) => {
  let email = req.body.email;
  try {
    let userData = await User.findOne({ email });
    if (!userData || req.body.password !== userData.password) {
      return res
        .status(400)
        .json({ errors: "Try logging with correct credentials" });
    }
    res.json(userData);
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});
module.exports = router;
