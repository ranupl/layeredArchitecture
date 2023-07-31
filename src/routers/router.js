const express = require("express");
const router = express.Router();
const movieCon = require("../controller/movieController");
const services =  require("../services/render");

router.get("/", services.homeRoute);
router.post("/create", movieCon.createData);

module.exports = router;