const express = require("express");
const router = express.Router();

const {
  createProject,
  withdraw,
  retrieveAllProjects,
} = require("../controllers/project");

router.route("/").post(createProject).get(retrieveAllProjects);
router.route("/:pid").post(withdraw);

module.exports = router;
