const Transaction = require("../models/transcation");
const { StatusCodes } = require("http-status-codes");
const createTransaction = async (req, res) => {
  console.log("entered create transaction controller");
  const newTransaction = await Transaction.create(req.body);
  res.status(StatusCodes.OK).json(newTransaction);
};

const fetchAllTransaction = async (req, res) => {
  const listOfTransaction = await Transaction.find();
  res.status(StatusCodes.OK).json(listOfTransaction);
};

module.exports = {
  createTransaction,
  fetchAllTransaction,
};
