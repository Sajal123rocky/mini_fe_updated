const mongoose = require("mongoose");

const Request = mongoose.Schema({
  projectTitle: {
    type: String,
    // type: mongoose.Schema.Types.ObjectId,
    // required: [true],
  },

  amount: {
    type: String,
    // required: [true],
  },

  supervisorMailId: {
    type: String,
    // required: [true],
  },

  recipientWalletAddress: {
    type: String,
    // required: [true],
  },

  billProofLink: {
    type: String,
  },
  contractAddress: {
    type: String,
    //required: [true],
  },
  transactionStatus: {
    type: String,
    enum: ["rejected", "accepted", "pending"],
    default: "pending",
  },
});

module.exports = mongoose.model("request", Request);
