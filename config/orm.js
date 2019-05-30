// In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`
//      * 
//      * Export the ORM object in `module.exports`


const connection = require ("./connection");

function selectAll(){
    connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM tacos", function (err, res){
        console.log(res);
    })
});
};


function insertOne(){


};


function updateOne(){


}

module.exports = selectAll();