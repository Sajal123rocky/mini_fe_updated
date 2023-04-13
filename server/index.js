const express = require("express");
const app = express();
const {connectDB} = require('./db/connect');
const project = require('./routes/project');
const port = process.env.PORT || 8000;
app.use(express.json());
// console.log(project);
app.use("/project", project);

const start = async () => {
  try {
    await connectDB('mongodb://127.0.0.1:27017/dappdb');
    app.listen(port, async () => {
      console.log(`listening on port ${port}`);
    });
  } catch (e) {
    console.log(e.toString());
  }
};

start();
