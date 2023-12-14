const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const config = require("../config.json");
const dotenv = require("dotenv");
dotenv.config();
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
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
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

    if (!userData) {
      return res.status(400).json({ errors: "Username/Email not found" });
    }
    const pwdCompare = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (pwdCompare !== true) {
      return res.status(400).json({ errors: "Incorrect password" });
    }
    const data = {
      user: {
        id: userData.id,
      },
    };
    const authToken = jwt.sign(data, process.env.jwtprivatekey);

    return res.json({ success: true, authToken });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});
module.exports = router;
