const mongoose = require("mongoose");

const Transaction = mongoose.Schema({
  projectId: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    required: [true, "please provide the corresponding project id"],
  },
  transactionType: {
    type: String,
    enum: ["deposit", "withdraw"],
    required: [true, "transactionType should be provided"],
  },
  transactionHash: {
    type: String,
  },
  transactionStatus: {
    type: String,
    enum: ["failed", "successful"],
  },
  from: {
    type: String,
    required: [true, "senders wallet address must be provided"],
  },
  to: {
    type: String,
    required: [true, "receipients wallet address must be provided"],
  },
  amount: {
    type: String,
    required: [true, "transaction amount must be provided"],
  },
  link: {
    type: String,
  },
});

module.exports = mongoose.model("transactions", Transaction);
