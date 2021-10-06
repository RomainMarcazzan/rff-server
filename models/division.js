"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Division extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Division.hasMany(models.Group, { foreignKey: "divisionId" });
    }
  }
  Division.init(
    {
      title: { type: DataTypes.STRING, allowNull: true },
    },
    {
      sequelize,
      modelName: "Division",
    }
  );
  return Division;
};
