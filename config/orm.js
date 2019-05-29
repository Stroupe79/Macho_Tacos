// In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`
//      * 
//      * Export the ORM object in `module.exports`


require ("connection.js");

function selectAll(){
    connection.query("SELECT * FROM tacos", function (err, res){
        console.log(res);
    })
};


function insertOne(){


};


function updateOne(){


}