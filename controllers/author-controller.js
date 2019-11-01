// Roman's code




// 


// Dee's Code





// 

// Dillon's Code
var db = require("../models");

module.exports = {
    read: function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        return db.brewery_db.findAll({
          include: [db.breweryinfo]
        }).then(function (dbbreweries) {
          res.json(dbbreweries);
        });
    },
    readById: function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.brewery_db.findOne({
          where: {
            id: req.params.id
          },
          include: [db.breweryinfo]
        }).then(function (dbbreweries) {
          res.json(dbbreweries);
        });
    },
    create: function (req, res) {
        db.brewery_db.create(req.body).then(function (dbbreweries) {
          res.json(dbbreweries);
        });
    },
    // update: function (req, res) {
        // FUTURE DEVELOPMENT;
    // },
    delete: function (req, res) {
        db.breweries.destroy({
          where: {
            id: req.params.id
          }
        }).then(function (dbbreweries) {
          res.json(dbbreweries);
        });
    }
}




// 

//  Joseph's Code







// 