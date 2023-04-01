module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('groups', [
      {
        name: 'André Luiz',
        user_id: 2,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('groups', null, {});
  },
};