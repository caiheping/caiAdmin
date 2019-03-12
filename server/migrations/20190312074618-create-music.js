'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Musics', {
      music_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      song: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: '歌名'
      },
      singer: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: '歌手'
      },
      language: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: '语言'
      },
      recordCompany: {
        type: Sequelize.STRING,
        comment: '唱片公司'
      },
      publish_time: {
        type: Sequelize.DATE,
        comment: '出版时间'
      },
      hot: {
        allowNull: false,
        type: Sequelize.INTEGER,
        comment: '热度'
      },
      genre: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: '类型'
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: '图片'
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: '播放路径'
      },
      lyrics: {
        allowNull: false,
        type: Sequelize.TEXT,
        comment: '歌词'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Musics');
  }
};