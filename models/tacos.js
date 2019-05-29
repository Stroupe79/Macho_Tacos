// import `orm.js` into `taco.js`

//     * Also inside `taco.js`, create the code that will call the ORM functions using taco specific input for the ORM.

//     * Export at the end of the `taco.js` file.
require ("orm.js");

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
    }
    selectAll();
  });