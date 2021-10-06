"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Teams",
      [
        {
          id: 1,
          title: "Stade Niortais",
          logo: "Stade_Niortais",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "CA Perigourdin",
          logo: "CA_Perigourdin",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "Rennes Etudiants Club",
          logo: "Rennes_Etudiants_Club",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: "Ol Marcquois Rugby",
          logo: "Ol_Marcquois_Rugby",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          title: "Club Municipal de Floirac",
          logo: "Club_Municipal_de_Floirac",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          title: "Rugby Club Bassin D Arcachon",
          logo: "Rugby_Club_Bassin_D_Arcachon",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          title: "Beauvais XV RC",
          logo: "Beauvais_XV_RC",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          title: "Rugby Club de Drancy",
          logo: "Rugby_Club_de_Drancy",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          title: "Stade Langonnais",
          logo: "Stade_Langonnais",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          title: "C'chartres Rugby",
          logo: "C'chartres_Rugby",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          title: "USA Limoges",
          logo: "USA_Limoges",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          title: "St Denis US",
          logo: "St_Denis_US",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
