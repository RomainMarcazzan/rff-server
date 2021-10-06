const express = require("express");
const cors = require("cors");
const divisionRouter = require("./routes/division.route");
const groupRouter = require("./routes/group.route");
const teamRouter = require("./routes/team.route");
const playerRouter = require("./routes/player.route");
const app = express();
const path = require("path");

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/api/divisions", divisionRouter);
app.use("/api/group", groupRouter);
app.use("/api/team", teamRouter);
app.use("/api/player", playerRouter);

module.exports = app;
