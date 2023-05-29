const Project = require("../models/project");
const { StatusCodes } = require("http-status-codes");

const createProject = async (req, res) => {
  console.log("entered create project controller");
  const project = await Project.create(req.body);
  res
    .status(StatusCodes.OK)
    .json({ message: "project created successfully", project });
};

const getProjectById = async(req , res) =>{
  console.log("Entered get project") ;
  const allpr = await Project.find() ;
  console.log(allpr);
  const requiredProject = await Project.findById(req.params.id);
  console.log(requiredProject);
  res.status(StatusCodes.OK).json(requiredProject);
}

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
//const Project = require('./project-model'); // assuming this file contains the mongoose model definition for "project"

async function getContractAddressByTitle(title) {
  const project = await Project.findOne({ title }); // find the project with the specified title
  if (!project) {
    throw new Error(`Project with title "${title}" not found`);
  }
  return project.contractAddress; // return the contract address of the project
}
module.exports = {
  createProject,
  retrieveAllProjects,
  changeProjectStatus,
  deleteProject,
  getProjectById,
  getContractAddressByTitle
};
