'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avator: {
      allowNull: true,
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    defaultScope: {
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt']
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
