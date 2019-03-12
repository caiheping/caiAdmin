'use strict';
module.exports = (sequelize, DataTypes) => {
  const Musics = sequelize.define('Musics', {
    music_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    song: {
      allowNull: false,
      type: DataTypes.STRING
    },
    singer: {
      allowNull: false,
      type: DataTypes.STRING
    },
    language: {
      allowNull: false,
      type: DataTypes.STRING
    },
    recordCompany: {
      type: DataTypes.STRING
    },
    publish_time: {
      type: DataTypes.DATE
    },
    hot: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    genre: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING
    },
    url: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lyrics: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  Musics.associate = function(models) {
    // associations can be defined here
  };
  return Musics;
};