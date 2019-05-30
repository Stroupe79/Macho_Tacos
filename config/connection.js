// Inside the `connection.js` file, setup the code to connect Node to MySQL.

// * Export the connection.


//  mySQL connection info
const mysql = require ("mysql");

const connection = mysql.createConnection({
host:'localhost',
user:'root',
password:'root',
database:'tacos_db'});


module.exports = connection;