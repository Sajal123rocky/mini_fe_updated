const express = require("express");
const router = express.Router();

const {
  createProject,
  retrieveAllProjects,
  changeProjectStatus,
  deleteProject,
} = require("../controllers/project");

router.route("/").post(createProject).get(retrieveAllProjects);
router.route("/stat/:id").post(changeProjectStatus);
router.route("/:id").delete(deleteProject);

module.exports = router;
