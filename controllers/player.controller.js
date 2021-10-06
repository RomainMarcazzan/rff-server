const { Player } = require("../models");

exports.getPlayersByTeam = (req, res) => {
  Player.findAll({
    where: { teamId: req.params.teamId },
    attributes: ["id", "firstname", "lastname"],
  })
    .then((player) => {
      res.status(200).json(player);
    })
    .catch((err) => res.status(400).json({ err }));
};
