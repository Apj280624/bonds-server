const mongoose = require("mongoose");

const securitySchema = new mongoose.Schema({
    isin: {type: String, required: true},
    issuer: {type: String, required: true},
    coupon: {type: Number, required: true},
    type: {type: String, required: true},
    faceValue: {type: Number, required: true},
    status: {type: String, required: true},
    maturityDate: {type: Date, required: true},
    unitSize: {type: Number, required: true},
    report: {type: String}
});

const Security = mongoose.model("Security", securitySchema);

module.exports = Security;