// NEW CODE
var Brew = require("../../models/post");
// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps
  app.get("/api/all", function(req, res) {
    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Brew.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });
  // Add a Brew
  app.post("/api/saved", function(req, res) {
    console.log("Saved Breweries:");
    console.log(req.body);
    // Brew.create({
    //   name: req.body.author,
    //   body: req.body.body,
    //   created_at: req.body.created_at
    // }).then(function(results) {
    //   // `results` here would be the newly created chirp
    //   res.end();
    // });
  });
};











// 
