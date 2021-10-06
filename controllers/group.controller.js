const { Group } = require("../models");

exports.getGroupsByDivision = (req, res, next) => {
  Group.findAll({
    where: { divisionId: req.params.divisionId },
    attributes: ["id", "title"],
  })
    .then((groups) => {
      res.status(200).json(groups);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};
