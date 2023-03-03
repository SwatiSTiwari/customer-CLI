const mongoose = require("mongoose");

// customer schema
const customerSchema = mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
});

// define and export
module.exports = mongoose.model("client", customerSchema);
