const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');

const expertSchema = new mongoose.Schema({
  name: String,
  age: String,
  gender: String,
  email: String,
  phone: String,
  licenseNumber: String,
  qualifications: String,
  experience: String,
  specializations: String,
  previousRoles: String,
  availability: String,
  fees: String,
  paymentMethods: String,
});

const Expert = mongoose.model('Expert', expertSchema);
module.exports = Expert;
