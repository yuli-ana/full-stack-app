// Add code here
const mongoose = require("mongoose");

const { Schema } = mongoose;

const addressSchema = new Schema({
  address: String,
  city: String,
  province: String,
  country: String,
  postalCode: String,
});
// No!!!
// mongoose.model("address", addressSchema)

module.exports = addressSchema;
