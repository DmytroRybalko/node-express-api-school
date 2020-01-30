
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Lecturers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
    },
    full_name: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    start_date: {
      type: Sequelize.DATEONLY,
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
  down: (queryInterface) => queryInterface.dropTable('Lecturers'),
};
