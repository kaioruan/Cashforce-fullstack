'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orderpoints', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nDup: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      dVenc: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      vDup: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      availableToMarket: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 1,
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
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orderpoints');
  }
};
