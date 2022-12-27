'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      phoneNumber: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      mobile: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      departament: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      verificationCode: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      emailChecked: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 0
      },
      cashforceAdm: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
