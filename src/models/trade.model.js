const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const tradeSchema = new mongoose.Schema({
  buyer: {
    type: String,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
  securityName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  tradeDate: {
    type: Date,
    required: true,
  },
  settlementDate: {
    type: Date,
  },
});

const Trade = mongoose.model("Trade", tradeSchema);

module.exports = Trade;
