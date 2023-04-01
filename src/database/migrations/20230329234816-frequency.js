'use-strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('frequencies', {
      meeting_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'meetings',
          key: 'id',
        },
      },
      user_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      frequency: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('frequencies')
  }
};