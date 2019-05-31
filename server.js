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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var taco = {
//     name: "Monster",
//     type: "Soft"
// }

app.get("/", function(req, res) {
orm.selectAll;
// console.log(data)
console.log(result)
res.render("index", {taco: result[0].taco_name});

});
  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  