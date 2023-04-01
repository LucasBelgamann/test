module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Lucas Gabriel Agostinho Belgamann',
        phone: '(41)98830-9378',
        email: 'lucas@admin.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
        role: 'admin',
      },
      {
        name: 'Leonardo Alves dos Santos',
        phone: '(41)99023-3456',
        email: 'leonardo@admin.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
        role: 'admin',
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};