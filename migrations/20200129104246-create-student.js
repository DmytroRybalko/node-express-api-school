
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Students', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    group_id: {
      type: Sequelize.INTEGER,
    },
    full_name: {
      type: Sequelize.STRING,
    },
    avg_grade: {
      type: Sequelize.FLOAT,
    },
    miss_assign: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Students'),
};
