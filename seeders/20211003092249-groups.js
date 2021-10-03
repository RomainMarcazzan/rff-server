"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Groups",
      [
        {
          id: 1,
          title: "Poule 1",
          divisionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "Poule 2",
          divisionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "Poule 3",
          divisionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: "Poule 4",
          divisionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //////////////////////////////////////
        {
          id: 5,
          title: "Poule 1",
          divisionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          title: "Poule 2",
          divisionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          title: "Poule 3",
          divisionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          title: "Poule 4",
          divisionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          title: "Poule 5",
          divisionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          title: "Poule 6",
          divisionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          title: "Poule 7",
          divisionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          title: "Poule 8",
          divisionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        /////////////////////////////////////
        {
          id: 13,
          title: "Poule 1",
          divisionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          title: "Poule 2",
          divisionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          title: "Poule 3",
          divisionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          title: "Poule 4",
          divisionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          title: "Poule 5",
          divisionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          title: "Poule 6",
          divisionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          title: "Poule 7",
          divisionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          title: "Poule 8",
          divisionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 21,
          title: "Poule 9",
          divisionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 22,
          title: "Poule 10",
          divisionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 23,
          title: "Poule 11",
          divisionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 24,
          title: "Poule 12",
          divisionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 25,
          title: "Poule 13",
          divisionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 26,
          title: "Poule 14",
          divisionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 27,
          title: "Poule 15",
          divisionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 28,
          title: "Poule 16",
          divisionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 29,
          title: "Poule 17",
          divisionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 30,
          title: "Poule 18",
          divisionId: 3,
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
