// Dependencies
// =============================================================

module.exports = function(sequelize, Sequelize) {

// Creates a "Brewery" model that matches up with DB
var BrewerySave = sequelize.define("breweryinfo", {
  name: Sequelize.STRING,
  type: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  website: Sequelize.STRING,
  created_at: Sequelize.DATE
});

// Syncs with DB
return BrewerySave;
}