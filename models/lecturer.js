'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lecturer = sequelize.define('Lecturer', {
    title: DataTypes.STRING,
    full_name: DataTypes.STRING,
    status: DataTypes.STRING,
    start_date: DataTypes.DATEONLY
  }, {});
  
  Lecturer.associate = function(models) {
    Lecturer.hasOne(models.Course, {
      foreignKey: 'lecturer_id',
      as: 'course'
    })
  };
  return Lecturer;
};