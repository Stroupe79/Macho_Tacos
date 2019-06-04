// Inside the `connection.js` file, setup the code to connect Node to MySQL.

// * Export the connection.


//  mySQL connection info
const mysql = require ("mysql");

const connection = mysql.createConnection({
host:'ff-ut.c72raecczwxn.us-east-1.rds.amazonaws.com',
user:'user1',
password:'user1',
database:'tacos_db'});


module.exports = connection;