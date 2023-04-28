const mongoose = require("mongoose");

const Request = mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true],
  },

  amount: {
    type: Number,
    required: [true],
  },

  supervisorMailId: {
    type: String,
    required: [true],
  },

  recipientWalletAddress: {
    type: String,
    required: [true],
  },

  billProofLink: {
    type: String,
  },

  transactionStatus: {
    type: String,
    enum: ["successful", "unsuccessful"],
    default: "unsuccessful",
  },
});

module.exports = mongoose.model("request", Request);
