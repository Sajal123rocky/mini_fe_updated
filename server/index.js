const express = require("express");
const app = express();
require('dotenv').config();
const {setupCloudConfig} = require('./cloudinaryApis/connect');
const fileUpload = require("express-fileupload");
const { connectDB } = require("./db/connect");
const project = require("./routes/project");
const request = require("./routes/request");
const port = process.env.PORT || 8000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(express.json());

app.use("/project", project);
app.use("/request" , request) ;

const start = async () => {
  try {
    setupCloudConfig();
    await connectDB("mongodb://127.0.0.1:27017/dappdb");
    app.listen(port, async () => {
      console.log(`listening on port ${port}`);
    });
  } catch (e) {
    console.log(e.toString());
  }
};

start();
