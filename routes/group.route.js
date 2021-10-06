const express = require("express");
const route = express.Router();
const { getGroupsByDivision } = require("../controllers/group.controller");

route.get("/:divisionId", getGroupsByDivision);

module.exports = route;
