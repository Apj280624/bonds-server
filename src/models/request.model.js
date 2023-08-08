const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  counterpartyId: { type: mongoose.Types.ObjectId, required: true },
  buysell: { type: Number, required: true },
  tradeDate: { type: Date, required: true },
  securityId: { type: mongoose.Types.ObjectId, required: true },
  noOfUnits: { type: String, required: true },
});

const Request = mongoose.model("request", requestSchema);

module.exports = Request;
