// Roman's code




// 


// Dee's Code
var db = require("../models");

module.exports = {
    read: function (req, res) {
        var query = {};
        if (req.query.brewery_id) {
            query.BreweryId = req.query.brewery_id;
        }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.breweryinfo.findAll({
            where: query,
            include: [db.Brewery]
        }).then(function (dbbrweryinfo) {
            res.json(dbbrweryinfo);
        });
    },
    readById: function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.breweryinfo.findOne({
            where: {
                id: req.params.id
            },
            include: [db.breweries]
        }).then(function (dbbreweryinfo) {
            res.json(dbbreweryinfo);
        });
    },
    create: function (req, res) {
        db.breweryinfo.create(req.body).then(function (dbbreweryinfo) {
            res.json(dbbreweryinfo);
        });
    },
    update: function (req, res) {
        db.breweryinfo.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }
        ).then(function (dbbreweryinfo) {
            res.json(dbbreweryinfo);
        });
    },
    delete: function (req, res) {
        db.breweryinfo.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbbreweryinfo) {
            res.json(dbbreweryinfo);
        });
    }
}




// 

// Dillon's Code





// 

//  Joseph's Code







// 