const { Team } = require("../models");

exports.getTeamsByGroup = (req, res) => {
  Team.findAll({
    where: { groupId: req.params.groupId },
    attributes: ["id", "title", "logo"],
  })
    .then((teams) => res.status(200).json(teams))
    .catch((err) => {
      res.status(400).json({ err });
    });
};

exports.getTeamById = (req, res) => {
  Team.findByPk(req.params.teamId)
    .then((team) => res.status(200).json(team))
    .catch((err) => {
      res.status(400).json({ err });
    });
};
