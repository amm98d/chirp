const express = require('express');
const router = express.Router()
const bcrypt = require("bcrypt");
const User = require('../models/User')

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(req.body.username,
      req.body.email, req.body.password,
      hashedPassword)

    console.log("newUser");
    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });
    console.log("newUser2");
    //save user and respond
    const user = await newUser.save();

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log("here");
    console.log(req.body.email);
    console.log(req.body.password);
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    user.isLoggedin = true;
    res.status(200).json(user)
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;