const mongoose = require("mongoose");
const addressSchema = require("./address-schema");

const ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  address: addressSchema,
  // address: {...addressSchema, unitTo: 55},
});

module.exports = mongoose.model("Contact", ContactSchema);
