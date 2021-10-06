const express = require("express");
const route = express.Router();
const { getPlayersByTeam } = require("../controllers/player.controller");

route.get("/team/:teamId", getPlayersByTeam);

module.exports = route;
