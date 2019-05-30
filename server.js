const express = require("express")
var exphbs = require("express-handlebars");
const mysql = require ("mysql");
// require("./config/connection")
var app = express();
// const selectAll = require ("./config/orm")
// require ("./config/connection")

// require("./app/routing/apiRoutes.js")(app);
// require("./app/routing/htmlRoutes.js")(app);
var PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// selectAll; 

app.get("/", function(req, res) {
    res.render("index");
  });
  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  