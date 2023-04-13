const mongoose = require("mongoose");

const Project = mongoose.Schema({
  projectName: {
    type: String,
    required: [true, "a project name must be provided"],
  },

  description: {
    type: String,
    default: "",
  },

  walletaddress: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("project", Project);
