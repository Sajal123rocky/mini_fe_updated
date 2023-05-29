const express = require("express");
const router = express.Router();

const {
  fetchAllTransaction,
  createTransaction,
} = require("../controllers/transaction");

router.route("/").get(fetchAllTransaction).post(createTransaction);

module.exports = router;
