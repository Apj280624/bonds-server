const express = require("express");
const router = express.Router();
const Security = require("../models/security.model");

router.get("/", async (req, res) => {
  try {
    const allsecurity = await Security.find({});
    return res.send(allsecurity);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/flagged", async (req, res) => {
  try {
    const allsecurity = await Security.find({});
    const flaggedSecurity = allsecurity.filter((security) => {
       return security.status === "Matured"
    });
    res.send(flaggedSecurity);
  } catch (error) {
    res.status(500).send(error.message);
  }
})

router.get(`/:id`, async (req, res) => {
  try {
    const securityId = req.params.id;

    //todo-use findOne and then if
    const securityById = await Security.findOne({ _id: securityId });
    if (!securityById) {
      return res.status(400).send("Invalid security ID");
    }
    res.send(securityById);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const securityDetails = req.body;
  try {
    const newSecurity = await Security.create(securityDetails);

    res.send(newSecurity);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports =  router ;
