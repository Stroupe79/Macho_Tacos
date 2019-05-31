// In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`
//      * 
//      * Export the ORM object in `module.exports`

const express = require ("express")
const connection = require ("./connection");

module.exports = {
    
    selectAll :
    connection.query("SELECT * FROM tacos;", function(err, data) {
        if (err) {
        //   return res.status(500).end();
        }
        return data;
      }),

    insertOne : function (){
    connection.connect(function(err) {
        if (err) throw err;
        connection.query(`INSERT ${item} FROM tacos`, function (err, res){
            console.log(res);
        })
    });
},


updateOne: function (){
    connection.connect(function(err) {
        if (err) throw err;
        connection.query(`UPDATE ${item} FROM tacos`, function (err, res){
            console.log(res);
        })
    });
}
};

// exporting functions solution found at https://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files