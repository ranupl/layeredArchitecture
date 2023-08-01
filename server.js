const express = require("express");
const ejs = require("ejs");
const bodyparser = require("body-parser");
const route = require("./src/http/routes/router");
const app = express();

const PORT = 4000;
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", route);

app.listen(PORT, () =>{
    console.log(`server is running at ${PORT}`);
})