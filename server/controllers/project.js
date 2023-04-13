const Project = require("../models/project");
const { StatusCodes } = require("http-status-codes");

const createProject = async (req, res) => {
  console.log("entered create project controller");
  const project = await Project.create(req.body);
  res
    .status(StatusCodes.OK)
    .json({ message: "project created successfully", project });
};

const retrieveAllProjects = async (req , res) =>{
  console.log("entered get all projects controller");
  const projects = await Project.find();
  res.status(StatusCodes.OK).json(projects);
}
const withdraw = async (req, res) => {};

module.exports = {
  createProject,
  withdraw,
  retrieveAllProjects,
};
