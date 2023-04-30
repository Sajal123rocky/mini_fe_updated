const express = require("express");
const router = express.Router();

const { createRequest, fetchAllRequests } = require("../controllers/request");

router.route("/").post(createRequest).get(fetchAllRequests);

module.exports = router;

