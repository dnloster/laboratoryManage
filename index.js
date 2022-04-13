const path = require("path");
const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 3000;

// template engine: handleBars
app.engine("hbs", engine({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.get("/", (req, res) => {
    res.render("home");
});

// config body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require("./api/routes.js"); //importing route
routes(app);

// config static file
app.use(express.static(__dirname + "/public"));

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);

console.log("RESTful API server started on: " + port);
