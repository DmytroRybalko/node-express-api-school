
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('GroupCourses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    group_id: {
      type: Sequelize.INTEGER,
    },
    course_id: {
      type: Sequelize.INTEGER,
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
  down: (queryInterface) => queryInterface.dropTable('GroupCourses'),
};
