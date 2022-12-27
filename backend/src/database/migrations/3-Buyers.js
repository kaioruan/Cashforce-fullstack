'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('buyers', {
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
        allowNull: true
      },
      tradingName: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      cashforceTax: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      responsibleName: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      responsibleEmail: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      responsiblePosition: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      responsiblePhone: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      responsibleMobile: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      website: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      postalCode: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      number: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      complement: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      neighborhood: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      state: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      phoneNumber: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      situation: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      situationDate: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      confirm: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 1
      },
      cnpjId: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: 'cnpjs',
          key: 'id'
        }
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
    await queryInterface.dropTable('buyers');
  }
};
