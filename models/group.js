'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    title: DataTypes.STRING,
    department: DataTypes.STRING
  }, {});

  Group.associate = function(models) {
    Group.hasMany(models.Student, {
      foreignKey: 'group_id',
      as: 'students'
    });
    Group.belongsToMany(models.Course, {
      through: 'GroupCourse',
      as: 'groups',
      foreignKey: 'group_id'
    })
  };
  return Group;
};