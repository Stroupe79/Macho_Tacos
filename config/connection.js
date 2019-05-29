// Inside the `connection.js` file, setup the code to connect Node to MySQL.

// * Export the connection.


//  mySQL connection info
const mysql = require ("mysql");

const connection = mysql.createConnection({
DB_HOST="localhost",
DB_USER="root",
DB_PASS="root",
DB_NAME="tacos_db"});


module.exports = connection;