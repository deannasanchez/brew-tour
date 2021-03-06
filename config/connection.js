// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  conneciton = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "milkshake",
  database: "brewery_db",
  dialect: "mysql",
  pool: {
    max: 100,
    min: 0,
    idle: 10000
  }
})
};

connection.connect();
// Exports the connection for other files to use
module.exports = sequelize;
