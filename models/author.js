// Roman's code




// 


// Dee's Code





// 

// Dillon's Code

module.exports = function(sequelize, DataTypes) {
    var BreweryInfo = sequelize.define("breweryinfo", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING
    });
  
    BreweryInfo.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      BreweryInfo.hasMany(models.breweryinfo, {
        onDelete: "cascade"
      });
    };
  
    return BreweryInfo;
  };
  



// 

//  Joseph's Code







// 