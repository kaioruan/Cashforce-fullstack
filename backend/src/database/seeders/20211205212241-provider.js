module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('providers', [
      {
        name: 'CEDENTE 002',
        tradingName: 'CEDENTE 002 LTDA',
        cashforceTax: '0',
        cnpjId: 2,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('providers', null, {});
  },
};
