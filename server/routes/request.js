const express = require("express");
const router = express.Router();

const {
  createRequest,
  fetchAllRequests,
  fetchRequest,
  changeRequestStatus,
} = require("../controllers/request");

router.route("/").post(createRequest).get(fetchAllRequests);
router.route("/:id").get(fetchRequest).post(changeRequestStatus);

module.exports = router;
