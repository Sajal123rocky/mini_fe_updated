const express = require("express");
const router = express.Router();

const {
  createRequest,
  fetchAllRequests,
  fetchRequest,
} = require("../controllers/request");

router.route("/").post(createRequest).get(fetchAllRequests);
router.route("/:id").get(fetchRequest);

module.exports = router;
