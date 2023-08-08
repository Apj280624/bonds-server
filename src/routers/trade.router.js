const express = require("express");
const router = express.Router();
const Trade = require("../models/trade.model");

router.get("/", async (req, res) => {
  try {
    const allTrades = await Trade.find({});
    return res.send(allTrades);
  } catch (error) {
    res.status(401).send("Trades not found");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tradeId = req.params.id;

    //todo-use findOne and then if
    const tradeById = await Trade.findOne({ _id: tradeId });
    if (!tradeById) {
      return res.status(400).send("Invalid trade ID");
    }
    res.send(tradeById);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const tradeDetails = req.body;
  try {
    const newtrade = await Trade.create(tradeDetails);

    res.send(newtrade);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
