"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "1",
          email: "admin@ajisetiaji.com",
          password: "admin",
          fullname: "admin",
          phoneNumber: "081234567890",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          email: "user@ajisetiaji.com",
          password: "admin",
          fullname: "user",
          phoneNumber: "082216540172",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
