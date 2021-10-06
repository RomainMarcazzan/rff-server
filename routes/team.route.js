const express = require("express");
const {
  getTeamsByGroup,
  getTeamById,
} = require("../controllers/team.controller");
const route = express.Router();

route.get("/group/:groupId", getTeamsByGroup);
route.get("/:teamId", getTeamById);

module.exports = route;
