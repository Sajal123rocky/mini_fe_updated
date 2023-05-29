const Request = require("../models/request");
const { StatusCodes } = require("http-status-codes");
const { uploadImage } = require("../modules/cloudinaryApis/createImage");
const sendEmail = require("../modules/smtp/sendmail");

const createRequest = async (req, res) => {
  console.log("entered create request controller");
  const file = req.files.photo;
  const imageLink = await uploadImage(file);
  req.body.billProofLink = imageLink;
  const newRequest = await Request.create(req.body);
  const supervisorMailId = req.body.supervisorMailId;
  const requestId = newRequest["_id"];
  sendEmail(supervisorMailId, requestId);
  res.status(StatusCodes.OK).json(newRequest);
  console.log(newRequest);
};

const changeRequestStatus = async (req, res) => {
  console.log("entered change project controller");
  await Request.findByIdAndUpdate(req.params.id, {
    transactionStatus: "successful",
  });
  res
    .status(StatusCodes.OK)
    .json({ "message ": "request status updated successfully" });
};

const fetchRequest = async (req, res) => {
  const requestId = req.params.id;
  console.log(`fetching request with id : ${requestId}`);
  const requiredRequest = await Request.findById(requestId);
  res.status(StatusCodes.OK).json(requiredRequest);
};

const fetchAllRequests = async (req, res) => {
  const requests = await Request.find();
  res.status(StatusCodes.OK).json(requests);
};

module.exports = {
  createRequest,
  fetchAllRequests,
  fetchRequest,
  changeRequestStatus,
};
