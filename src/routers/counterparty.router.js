const express = require("express");
const router = express.Router();
const Counterparty = require("../models/counterparty.model");

router.get("/", async (req, res) => {
  try {
    const allcounterpartys = await Counterparty.find({});
    return res.send(allcounterpartys);
  } catch (error) {
    res.status(401).send("counterpartys not found");
  }
});

router.get(`/:id`, async (req, res) => {
  try {
    const counterpartyId = req.params.id;

    //todo-use findOne and then if
    const counterpartyById = await Counterparty.findOne({
      _id: counterpartyId,
    });
    if (!counterpartyById) {
      return res.status(400).send("Invalid counterparty ID");
    }
    res.send(counterpartyById);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/login", async (req, res) => {
  let email = req.body.email;
  let enteredPassword = req.body.password;

  try {
    // match creds
    const counterpartyDoc = await Counterparty.findOne({ email: email });

    if (!counterpartyDoc) {
      // wrong counterpartyId
      return res.status(401).json({ statusText: statusText.INVALID_CREDS });
    }

    const hashedPassword = counterpartyDoc.password;

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
      exp:
        Math.floor(Date.now() / 1000) + vars.token.expiry.counterparty_IN_SEC,
      person: {
        mongoId: counterpartyDoc._id,
        role: "counterparty",
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

module.exports =  router ;
