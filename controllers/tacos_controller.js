// Inside the `tacos_controller.js` file, import the following:

// * Express
// * `taco.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

const express = require ("express");
const router = express.Router();
const taco = require ("../models/tacos.js");

router.get("/", function (req, res){
  taco.all(function(data) {
    var tacoArray = [];
        tacoArray = {
          tacos: data
        };
        console.log(tacoArray);
        res.render("index", tacoArray);
      });

})

router.post("/api/tacos", function(req, res) {
  console.log("test")
    taco.insert([
      "name", "shell", "veg"
    ], [
      req.body.name, req.body.shell, req.body.veg
    ], function(result) {
      res.json({ id: result.insertId });
    });
  });
  


router.put("/api/tacos/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    taco.update({
      veg: req.body.veg
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/tacos/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    taco.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  