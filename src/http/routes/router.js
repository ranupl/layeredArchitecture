const express = require("express");
const route = express.Router();
const nameCon = require("../controllers/nameController")
const nameServ = require("../../service/nameService")

// route.get("/", nameServ.home);
route.post("/submitForm", nameCon.create);

module.exports = route;