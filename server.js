const express = require("express");
const dotenv = require("dotenv").config();
const bodyparser = require("body-parser");
const router = require("./src/routers/router")
require("./src/database/connection")
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use("/", router);

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})