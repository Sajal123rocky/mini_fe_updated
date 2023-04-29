const express = require("express");
const router = express.Router();

const {
  createProject,
  retrieveAllProjects,
  changeProjectStatus,
} = require("../controllers/project");

router.route("/").post(createProject).get(retrieveAllProjects);
// router.route("/:id").post(withdrawFunds);
router.route("/stat/:id").post(changeProjectStatus);

module.exports = router;
