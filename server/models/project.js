const mongoose = require("mongoose");

const Project = mongoose.Schema({
  title: {
    type: String,
    required: [true, "a project name must be provided"],
  },

  description: {
    type: String,
    default: "",
  },

  balance: {
    type: String,
    required: [true, "a project title must be provided"],
  },

  walletaddress: {
    type: String,
    required: [true],
  },

  financeValidatoraddress: {
    type: String,
    required: [true],
  },

  balance: {
    type: Number,
    default: 0,
  },

  totalFunds: {
    type: Number,
    default: 0,
  },

  contractAddress: {
    type: Number,
    required: [true],
  },

  status: {
    type: String,
    enum: ["ongoing", "closed"],
    default: "ongoing",
  },
});

module.exports = mongoose.model("project", Project);
