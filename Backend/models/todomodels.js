const mongoose = require ('mongoose');

const requestSchema = new mongoose.Schema({
  work: {
    type: String,
    required: [true, "Work field is required"] // Custom error message
  }
});

const Request = mongoose.model("Request",requestSchema);
module.exports = Request;