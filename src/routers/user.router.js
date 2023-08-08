const express = require("express");
const router = express.Router();
const statusText = require("../utils/status_text");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const vars = require("../utils/constants");

router.post("/login", async (req, res) => {
  let email = req.body.email;
  let enteredPassword = req.body.password;

  try {
    // match creds
    const userDoc = await User.findOne({ email: email });

    if (!userDoc) {
      // wrong userId
      return res.status(401).json({ statusText: statusText.INVALID_CREDS });
    }

    const hashedPassword = userDoc.password;

    const isPasswordMatched = await bcrypt.compare(
      enteredPassword,
      hashedPassword
    );

    if (!isPasswordMatched) {
      // wrong password
      return res.status(401).json({ statusText: statusText.INVALID_CREDS });
    }

    // generate token
    const data = {
      exp: Math.floor(Date.now() / 1000) + vars.token.expiry.USER_IN_SEC,
      person: {
        mongoId: userDoc._id,
        role: "user",
      },
    };

    const token = jwt.sign(data, process.env.JWT_SECRET);

    res
      .status(200)
      .json({ statusText: statusText.LOGIN_IN_SUCCESS, token: token });
  } catch (err) {
    // console.log(err.message);
    res.status(500).json({ statusText: statusText.INTERNAL_SERVER_ERROR });
  }
});

router.post("/register", async (req, res) => {
  console.log(req.originalUrl);
  // manual validation not required, mongooose validation running

  const regisForm = req.body;

  console.log(regisForm);


  try {
    // hash password and update form
    const salt = await bcrypt.genSalt(vars.bcryptSaltRounds);
    regisForm.password = await bcrypt.hash(regisForm.password, salt);

    await User.create(regisForm);

    res.status(200).json({ statusText: statusText.REGISTRATION_SUCCESS });
  } catch (err) {
    // console.log(err.message);
    res.status(500).json({ statusText: statusText.INTERNAL_SERVER_ERROR });
  }
});

module.exports = router;
