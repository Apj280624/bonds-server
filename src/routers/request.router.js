const express = require("express");
const router = express.Router();
const Request = require("../models/request.model");

router.get("/", async (req, res) => {
  try {
    const allrequests = await Request.find({});
    return res.send(allrequests);
  } catch (error) {
    res.status(401).send("requests not found");
  }
});

router.get(`/:id`, async (req, res) => {
  try {
    const requestId = req.params.id;

    //todo-use findOne and then if
    const requestById = await Request.findOne({ _id: requestId });
    if (!requestById) {
      return res.status(400).send("Invalid request ID");
    }
    res.send(requestById);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const requestDetails = req.body;
  try {
    const newrequest = await Request.create(requestDetails);

    res.send(newrequest);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
