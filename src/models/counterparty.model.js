const mongoose = require("mongoose");

const counterpartySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  securities: {
    type: [mongoose.Types.ObjectId],
    default: [],
  },
  trades: {
    type: [mongoose.Types.ObjectId],
    default: [],
  },
});

const Counterparty = mongoose.model("Counterparty", counterpartySchema);

module.exports = Counterparty;
