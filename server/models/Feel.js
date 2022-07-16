const mongoose = require("mongoose");

const feelSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: String,
    required: true,
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
