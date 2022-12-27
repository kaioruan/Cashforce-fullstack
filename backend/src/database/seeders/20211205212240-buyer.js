module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('buyers', [
      {
        name: 'SACADO 001',
        tradingName: 'SACADO 001 LTDA',
        cashforceTax: '0',
        confirm: 1,
        cnpjId: 1,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('buyers', null, {});
  },
};
