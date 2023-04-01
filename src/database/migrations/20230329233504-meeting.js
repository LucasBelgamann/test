'use-strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('meetings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      group_id: {
        foreignKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'groups',
          key: 'id',
        },
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('meetings')
  }
};