// Inside the `connection.js` file, setup the code to connect Node to MySQL.

// * Export the connection.


//  mySQL connection info
const mysql = require ("mysql");

const connection = mysql.createConnection({
HOST:'localhost',
USER:'root',
PASS:'root',
PORT: 3308,
NAME:'tacos_db'});


module.exports = connection;