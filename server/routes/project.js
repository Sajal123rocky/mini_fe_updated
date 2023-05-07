const express = require("express");
const router = express.Router();

const {
  createProject,
  retrieveAllProjects,
  changeProjectStatus,
  deleteProject,
  getContractAddressByTitle,
} = require("../controllers/project");

router.route("/").post(createProject).get(retrieveAllProjects);
router.route("/stat/:id").post(changeProjectStatus);
router.route("/:id").delete(deleteProject);
router.get("/contract/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const contractAddress = await getContractAddressByTitle(title);
    res.json({ contractAddress });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});
module.exports = router;
