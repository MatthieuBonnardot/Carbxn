const mongoose = require("mongoose");

const feelSchema = mongoose.Schema({
  user: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  case: {
    type: String,
  },
  personal: {
    type: Number,
  },
  work: {
    type: Number,
  },
  workload: {
    type: Number,
  },
  sleep: {
    type: Number,
  },
  comment: {
    type: String,
  },
});

const Feel = mongoose.model("Feel", feelSchema);

module.exports = { Feel };
