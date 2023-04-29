const express = require("express");
const app = express();
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
const {connectDB} = require('./db/connect');
const project = require('./routes/project');
const port = process.env.PORT || 8000;

app.use(express.json());

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
