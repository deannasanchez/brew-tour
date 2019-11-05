var db = require("../../models");

var router = require("express").Router();
// Routes
// =============================================================

  // Get all chirps
  router.get("/", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to hrouteren after the query, we'll use
    // the .then function
    db.breweryinfo.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a Brew
  router.post("/", function(req, res) {

    console.log("Saved Breweries:");
    console.log(req.body);
    

    db.breweryinfo.create({
      name: req.body.name,
      address: req.body.addy,
      city: req.body.city,
      state: req.body.state,
      website: req.body.web
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });
  });

module.exports = router
