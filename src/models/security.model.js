const mongoose = require("mongoose");

const securitySchema = new mongoose.Schema({
    isin: {type: String, required: true},
    issuer: {type: String, required: true},
    coupon: {type: String, required: true},
    type: {type: String, required: true},
    faceValue: {type: String, required: true},
    status: {type: String, required: true},
    maturityDate: {type: Date, required: true}
});

const Security = mongoose.model("Security", securitySchema);

module.exports = Security;