const Project = require("../models/project");
const { StatusCodes } = require("http-status-codes");

const createProject = async (req, res) => {
  console.log("entered create project controller");
  const project = await Project.create(req.body);
  res
    .status(StatusCodes.OK)
    .json({ message: "project created successfully", project });
};

const getProjectById = async (req, res) => {
  console.log("Entered get project by id contract");
  const project = await Project.findById(req.params.id);
  return res.status(StatusCodes.OK).json(project);
};

const retrieveAllProjects = async (req, res) => {
  console.log("entered get all projects controller");
  const projects = await Project.find();
  res.status(StatusCodes.OK).json(projects);
};

const changeProjectStatus = async (req, res) => {
  console.log("entered change project controller");
  await Project.findByIdAndUpdate(req.params.id, {
    status: "closed",
  });
  res
    .status(StatusCodes.OK)
    .json({ "message ": "project status updated successfully" });
};

const deleteProject = async (req, res) => {
  console.log("entered delete project controller");
  await Project.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.NO_CONTENT);
};

module.exports = {
  createProject,
  retrieveAllProjects,
  changeProjectStatus,
  deleteProject,
  getProjectById,
};
