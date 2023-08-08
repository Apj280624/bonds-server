const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const tradeSchema = new mongoose.Schema({
  bookId: {
    type: Types.ObjectId,
    required: true,
  },
  buyerId: {
    type: Types.ObjectId,
    required: true,
  },
  sellerId: {
    type: Types.ObjectId,
    required: true,
  },
  securityId: {
    type: Types.ObjectId,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  tradeDate: {
    type: Date,
    required: true,
  },
  settlementDate: {
    type: Date,
    required: true,
  },
});

const Trade = mongoose.model("Trade", tradeSchema);

module.exports = Trade;
