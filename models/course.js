
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    lecturer_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    specialization: DataTypes.STRING,
    rating: DataTypes.FLOAT,
  }, {});

  // eslint-disable-next-line func-names
  Course.associate = function (models) {
    Course.belongsToMany(models.Group, {
      through: 'GroupCourse',
      as: 'groups',
      foreignKey: 'course_id',
    });
    Course.belongsTo(models.Lecturer, {
      foreignKey: 'lecturer_id',
      as: 'lecturer',
    });
  };
  return Course;
};
