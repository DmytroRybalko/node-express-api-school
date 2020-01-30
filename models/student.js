
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    group_id: DataTypes.INTEGER,
    full_name: DataTypes.STRING,
    avg_grade: DataTypes.FLOAT,
    miss_assign: DataTypes.STRING,
  }, {});

  Student.associate = function (models) {
    Student.belongsTo(models.Group, {
      foreignKey: 'group_id',
      as: 'group',
    });
  };
  return Student;
};
