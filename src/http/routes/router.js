const express = require("express");
const route = express.Router();
const nameCon = require("../controllers/nameController");

route.get("/", (req, res) => {
  res.render("index");
});
route.post("/submitForm", nameCon.create);

module.exports = route;
