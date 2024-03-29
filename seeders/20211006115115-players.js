"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Players",
      [
        {
          id: 1,
          firstname: "Benjamin",
          lastname: "ALCACEBE",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          firstname: "Alexandre",
          lastname: "ALCACEBE",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          firstname: "Adrien",
          lastname: "ALLIGNER",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          firstname: "Benoit",
          lastname: "ANDRE",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          firstname: "Axel",
          lastname: "BARZIC",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          firstname: "Cesar",
          lastname: "BAUDIN",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          firstname: "Beka",
          lastname: "BITSADZE",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          firstname: "Hugo",
          lastname: "BONNET",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          firstname: "Michael",
          lastname: "BOTHA",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          firstname: "Florian",
          lastname: "BOUGEROL",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          firstname: "Pacome",
          lastname: "BOUTIN",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          firstname: "Jean Baptiste",
          lastname: "BRETAGNOLLE",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          firstname: "Jimy",
          lastname: "BUCH",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          firstname: "Aurelien",
          lastname: "BUSSON",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          firstname: "Maxence",
          lastname: "CARTON",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          firstname: "Tom",
          lastname: "CARTRON",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          firstname: "Louis",
          lastname: "CHAIGNEAU",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          firstname: "Gaetan",
          lastname: "CLERMONT",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          firstname: "Valentin",
          lastname: "COUGNAUD",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          firstname: "Timothee",
          lastname: "DIGOUT",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 21,
          firstname: "Valentin",
          lastname: "DOMINICI",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 22,
          firstname: "Valentin",
          lastname: "DRELON",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 23,
          firstname: "Baptiste",
          lastname: "DUPRAT",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 24,
          firstname: "Steven",
          lastname: "ELOFER",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 25,
          firstname: "Damien",
          lastname: "FIERRO",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 26,
          firstname: "Enzo",
          lastname: "GAUTREAU",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 27,
          firstname: "Alexandre",
          lastname: "GELADE",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 28,
          firstname: "Tony",
          lastname: "GIRAUD",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 29,
          firstname: "Jeff",
          lastname: "GOUFAN",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 30,
          firstname: "Clement",
          lastname: "GRIMAULT",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 31,
          firstname: "Johann",
          lastname: "GRUNDLINGH",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 32,
          firstname: "Stephane",
          lastname: "GUENIN",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 33,
          firstname: "Clement",
          lastname: "KESTEMAN",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 34,
          firstname: "Antoine",
          lastname: "LESCALMEL",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 35,
          firstname: "Lancelot",
          lastname: "LUTEAU",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 36,
          firstname: "Raphael",
          lastname: "MANDRET",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 37,
          firstname: "Tom",
          lastname: "MARCHE",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 38,
          firstname: "Leandre",
          lastname: "MENARD",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 39,
          firstname: "Enzo",
          lastname: "NAU",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 40,
          firstname: "Raphael",
          lastname: "NIETO",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 41,
          firstname: "Tom",
          lastname: "PAJOT",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 42,
          firstname: "Sebastien",
          lastname: "PINAUD",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 43,
          firstname: "Maxime",
          lastname: "POIRAUDEAU",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 44,
          firstname: "Martin",
          lastname: "PREVOST",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 45,
          firstname: "Arthur",
          lastname: "ROSSARD SOULICE",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 46,
          firstname: "Martin",
          lastname: "SAUVARD",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 47,
          firstname: "Eli",
          lastname: "SERRA",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 48,
          firstname: "Guillaume",
          lastname: "SINGER",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 49,
          firstname: "Johnathan",
          lastname: "TALIA ULI",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 50,
          firstname: "Ioan",
          lastname: "TOMASCU",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 51,
          firstname: "Martin",
          lastname: "VERGNAUD",
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 52,
          firstname: "Marika",
          lastname: "VUNIBAKA",
          teamId: 1,
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
