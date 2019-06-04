// In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`
//      * 
//      * Export the ORM object in `module.exports`

const express = require ("express")
const connection = require ("./connection");



// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";

function printQuestionMarks(num) {
    var arr = [];
    
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    
    return arr.toString();
}


// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  
var orm = {
    
    selectAll : function (cb){
        connection.query("SELECT * FROM tacos;", function(err, data) {
            if (err) {
                // return res.status(500).end();
            }
            cb(data);
            // connection.end();
        });
    },
    
    
//     create : function (cols, vals){
//     connection.query("INSERT INTO tacos ('" + cols +"') VALUES ('" + vals + "');", function(err) {
//         if (err) throw err;
//         // connection.query(`INSERT ${item} FROM tacos`, function (err, res){
        
//     });
// },

create: function( cols, vals, cb) {
    var queryString = "INSERT INTO tacos";

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },



updateOne: function (){
    connection.query(function(err) {
        if (err) throw err;
        connection.query(`UPDATE ${item} FROM tacos`, function (err, res){
            console.log(res);
        })
    });
},

delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};



module.exports = orm
// exporting functions solution found at https://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files