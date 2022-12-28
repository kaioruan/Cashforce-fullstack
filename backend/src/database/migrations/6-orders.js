'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      orderNfId: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      orderNumber: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      orderPath: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      orderFileName: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      orderOriginalName: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      emissionDate: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      pdfFile: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      emitedTo: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      nNf: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      CTE: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      value: {
        type: Sequelize.STRING(255),
        allowNull: true,
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
      cnpjId: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        DELETE: 'CASCADE',
        UPDATE: 'CASCADE',
        references: {
          model: 'cnpjs',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        DELETE: 'CASCADE',
        UPDATE: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      buyerId: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        DELETE: 'CASCADE',
        UPDATE: 'CASCADE',
        references: {
          model: 'buyers',
          key: 'id'
        }
      },
      providerId: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        DELETE: 'CASCADE',
        UPDATE: 'CASCADE',
        references: {
          model: 'providers',
          key: 'id'
        }
      },
      orderStatusBuyer: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: '0'
      },
      orderStatusProvider: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: '0'
      },
      deliveryReceipt: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      cargoPackingList: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      deliveryCtrc: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
