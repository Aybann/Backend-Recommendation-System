const express = require("express");
const {
  kmeansFunction,
  fetchRecords,
} = require("../controller/generalController");
const app = express();

app.post("/", kmeansFunction);
app.get("/fetchRecords", fetchRecords);

module.exports = app;
