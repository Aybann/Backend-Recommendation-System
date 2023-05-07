const express = require("express");
const {
  kmeansFunction,
  fetchRecords,
} = require("../controller/generalController");
const { login, register } = require("../controller/accountController");
const verifyToken = require("../utils/verifyToken");
const app = express();

app.post("/", kmeansFunction);
app.get("/fetchRecords", verifyToken, fetchRecords);
app.post("/login", login);
app.post("/register", register)

module.exports = app;
