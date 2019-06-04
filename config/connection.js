// Inside the `connection.js` file, setup the code to connect Node to MySQL.

// * Export the connection.


//  mySQL connection info
const mysql = require ("mysql");

const connection = mysql.createConnection({
host:'localhost',
user:'b9fc9a8c78eb95',
password:'854e8b3e',
database:'tacos_db'});


module.exports = connection;