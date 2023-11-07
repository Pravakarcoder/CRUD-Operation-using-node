const express = require("express");
const coursesRouter = require("./routes/courses");
const connectDb = require("./config/dbConnection");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv").config();

connectDb();

const port = process.env.PORT || 6000;

app.use(bodyParser.json());
app.use("/api/v1/courses", coursesRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
