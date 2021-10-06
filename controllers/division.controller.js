const { Division } = require("../models");

exports.getAllDivisions = (req, res) => {
  Division.findAll({ attributes: ["id", "title"] })
    .then((divisions) => res.status(200).json(divisions))
    .catch((err) => {
      res.status(400).json({ err });
    });
};
