const express = require("express");
const cors = require('cors');
const router = express.Router();

router.use(cors());

require("../db doc/atlas_conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hello router");
});

router.post("/signup", async (req, res) => {
  const { userName, email, password } = req.body;


  try {
    const newUser = await User.findOne({ email });

    if (newUser) {
      console.log("user already exist");
      return res.status(401).send({ message: "user already exist" });
    }

    const user = new User({ userName, email, password });
    await user.save();

    console.log("user registered successfully!");
    return res.status(200).send({ message: "user registered successfully!" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      res
        .status(200)
        .json({ message: "user logged successfully", userName: user.userName});
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error processing request" });
  }
});

module.exports = router;
