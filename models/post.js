// Roman's code




// 


// Dee's Code





// 

// Dillon's Code

module.exports = function (sequelize, DataTypes) {
    var BreweryInfo = sequelize.define("breweryinfo", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    BreweryInfo.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        BreweryInfo.belongsTo(models.breweryinfo, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return BreweryInfo;
};




// 

//  Joseph's Code







// 