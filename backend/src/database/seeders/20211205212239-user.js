module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'ALLAN SOUZA',
        email: 'allan@cashforce.com.br',
        verificationCode: '',
        emailChecked: 1,
        cashforceAdm: 1,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
