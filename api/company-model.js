const mongoose = require("mongoose");
const addressSchema = require("./address-schema");

// ref is specific for relational documents
// in this case we're just doing nested object as addressSchema

const CompanySchema = new mongoose.Schema({
  name: String,
  address: addressSchema,
});

module.exports = mongoose.model("Company", CompanySchema);
