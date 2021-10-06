const express = require("express");
const { getAllDivisions } = require("../controllers/division.controller");

const router = express.Router();

router.get("/", getAllDivisions);

module.exports = router;
