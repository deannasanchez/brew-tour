// Roman's code




// 


// Dee's Code





// 

// Dillon's Code
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection");
// Creates a "Chirp" model that matches up with DB
var BrewerySave = sequelize.define("breweries", {
  name: Sequelize.STRING,
  type: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  website: Sequelize.STRING,
  created_at: Sequelize.DATE
});
// Syncs with DB
BrewerySave.sync();
// Makes the Chirp Model available for other files (will also create a table)
module.exports = BrewerySave;



// 

//  Joseph's Code







// 