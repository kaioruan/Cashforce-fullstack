module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('cnpjs', [
      {
        cnpj: '00000000000001',
        companyType: '2',
      },
      {
        cnpj: '00000000000002',
        companyType: '1',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('cnpjs', null, {});
  },
};
