
module.exports = (sequelize, DataTypes) => {
  const GroupCourse = sequelize.define('GroupCourse', {
    group_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
  }, {});
  GroupCourse.associate = function (models) {
    // associations can be defined here
  };
  return GroupCourse;
};
