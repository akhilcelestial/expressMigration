'use strict';

const { DATE } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id:1,
      name: 'Doe',
      email: 'demo@demo.com',
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {
      id:2,
      name: 'Doe1',
      email: 'demo@demo1.com',
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {
      id:3,
      name: 'Doe3',
      email: 'demo@demo3.com',
      createdAt:new Date(),
      updatedAt:new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
