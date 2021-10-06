"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Team.belongsTo(models.Group, { foreignKey: "groupId" });
    }
  }
  Team.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      logo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Team",
    }
  );
  return Team;
};
