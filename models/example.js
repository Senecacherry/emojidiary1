module.exports = function(sequelize, DataTypes) {
    var feelngs = sequelize.define("feelings", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return feeling;
  };