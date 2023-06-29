'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Members', [{
       name: 'JUNG-SUNG-E',
       emailAddress: 'test@naver.com',
       }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Members', null, {});
    }
};

//seeders 안에 members 파일을 또 따로너니까 오류발생함
//ERROR: Could not find migration method: up