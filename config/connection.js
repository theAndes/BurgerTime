
// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");

// Set up our connection information
if (process.env.JAWSDB_URL) {
 var connection=mysql.connection(process.env.JAWSDB_URL)
}
else{
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "test",
  database: "burger_db"
});
}
// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
