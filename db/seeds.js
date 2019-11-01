//  require

var db = require("../models");
var data = require("./seeds.json");

// 

// Roman's code




// 


// Dee's Code





// 

// Dillon's Code

// Requiring our models for syncing
// Syncing our sequelize models and then starting our Express app
// =============================================================

function seedDb(Model, models) {
    return Promise.all(models.map(model => Model.create(model)));
}

// if you want next deployment to wipe out and remake database,
// uncomment {force:true} and push to heroku, 
// but be sure to comment it back at some
// point so it doesn't always remake your database.
db.sequelize.sync(/*{force: true}*/).then(async function() {
    // since posts require authors as a column, we run authors first
    await seedDb(db.breweries, data.breweries);
    await seedDb(db.breweryinfo, data.breweryinfo);
    await db.sequelize.close();
});



// 

//  Joseph's Code







// 