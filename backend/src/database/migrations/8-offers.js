'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      tax: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      tariff: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      adValorem: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      float: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      iof: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      expiresIn: {
        type: Sequelize.DATE,
        allowNull: false
      },
      paymentStatusSponsor: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
      },
      paymentStatusProvider: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
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
      },
      orderId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'orders',
          key: 'id'
        },
      },
      sponsorId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'sponsors',
          key: 'id'
        },
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('offers');
  }
};
