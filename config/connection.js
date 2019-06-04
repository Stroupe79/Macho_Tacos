// Inside the `connection.js` file, setup the code to connect Node to MySQL.

// * Export the connection.


//  mySQL connection info
const mysql = require ("mysql");

const connection = mysql.createConnection({
host:'us-cdbr-iron-east-02.cleardb.net',
user:'b9fc9a8c78eb95',
password:'854e8b3e',
database:'heroku_01fc67f06bc0c28'});


module.exports = connection;