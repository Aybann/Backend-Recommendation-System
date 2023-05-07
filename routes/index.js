const express = require("express");
const {
  kmeansFunction,
  fetchRecords,
} = require("../controller/generalController");
const { login, register } = require("../controller/accountController");
const app = express();

app.post("/", kmeansFunction);
app.get("/fetchRecords", fetchRecords);
app.post("/login", login);
app.post("/register", register)

module.exports = app;
