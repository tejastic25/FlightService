'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('airplanes', [{
      model_no: 'Boeing 787',
      capacity: '240',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      model_no: 'Boeing 767',
      capacity: '290',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      model_no: 'Boeing 747',
      capacity: '467',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      model_no: 'Boeing 777',
      capacity: '240',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
