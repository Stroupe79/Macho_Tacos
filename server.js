const express = require("express")
var exphbs = require("express-handlebars");
const mysql = require ("mysql");
// require("./config/connection")
var app = express();
var path = require ("path")
const orm = require ("./config/orm")

var PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join (__dirname + '/public')));
app.use(express.static(path.join (__dirname + '/models')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controllers/tacos_controller.js");

app.use(routes);


// app.get("/", function(req, res) {
// orm.selectAll(function (data){
// console.log(data)
// res.render("index", {taco: data, type: data.shell});
// });
// });
  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  