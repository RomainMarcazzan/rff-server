"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Group.belongsTo(models.Division, {
        foreignKey: "divisionId",
      });
      Group.hasMany(models.Team, { foreignKey: "groupId" });
    }
  }
  Group.init(
    {
      title: { type: DataTypes.STRING, allowNull: true },
    },
    {
      sequelize,
      modelName: "Group",
    }
  );
  return Group;
};
