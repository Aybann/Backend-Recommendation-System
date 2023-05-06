require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dbURI = process.env.ATLAS_URI;
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json(), urlencodedParser);
app.use(express.json());
app.use(cors());

const generalRoutes = require("./routes/index");
app.use(generalRoutes);

app.get("*", function (req, res) {
  res.status(404).send({ message: "URI does not exist" });
});
app.post("*", function (req, res) {
  res.status(404).send({ message: "URI does not exist" });
});
app.put("*", function (req, res) {
  res.status(404).send({ message: "URI does not exist" });
});
app.delete("*", function (req, res) {
  res.status(404).send({ message: "URI does not exist" });
});

mongoose.set("strictQuery", false);
mongoose.connect(dbURI);

app.listen(PORT, () => {
  console.log(`serving running on PORT ${PORT}`);
});
