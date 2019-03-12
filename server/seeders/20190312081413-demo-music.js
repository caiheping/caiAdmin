'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Musics', [{
      song: '最佳损友',
      singer: '任素汐',
      language: '国语',
      recordCompany: '北京听见时代娱乐传媒有限公司',
      publish_time: '2019-03-01',
      hot: 99,
      genre: 'Pop 流行',
      image: '//y.gtimg.cn/music/photo_new/T002R300x300M0000015rUVB2OUdGA.jpg?max_age=2592000',
      url: 'http://113.113.69.164/amobile.music.tc.qq.com/C400004WTcut1gjTcW.m4a?guid=4451169631&vkey=EA8D19B49FD3268AA3BD25B6B2B19B4531008707CF23626916EA53E84AB9312179B31F4C06F1310D120170C679081BFF93CB70732029F654&uin=0&fromtag=66',
      lyrics: `
        [ti:老公天下第一]
        [ar:叶洛洛]
        [al:老公天下第一]
        [by:]
        [offset:0]
        [00:00.00]老公天下第一 - 叶洛洛
        [00:01.36]词：李哈哈
        [00:02.72]曲：李哈哈
        [00:04.09]混音：林威臻
        [00:05.45]老公老公 mua 左边一个 mua
        [00:09.13]
        [00:09.64]右边一个 mua 嘴巴一个 mua
        [00:13.42]
        [00:13.94]老公老公抱抱 我要公主抱抱
        [00:18.19]飞起来的抱抱 转圈圈的抱抱
        [00:22.48]我的老公超帅 笑起来时超帅
        [00:26.73]牵我手时超帅 摸头杀时超帅
        [00:31.02]我的老公最棒 是我崇拜的对象
        [00:35.10]我亲亲只能你要 这首歌只为你唱
        [00:39.45]我只想做小朋友 有你能一直守护
        [00:43.63]我只想做小朋友 有你能一直照顾
        [00:47.63]
        [00:48.20]听说如果小朋友不开心就会死掉
        [00:52.24]可我这个小朋友没有你才会死掉
        [00:56.21]
        [00:56.76]你生气了 mua 你起床了 mua
        [01:01.04]你下班了 mua 你睡觉了 mua
        [01:04.82]
        [01:05.33]随时随地抱抱 开心也要抱抱
        [01:09.57]难过也要抱抱 睡觉也要抱抱
        [01:13.93]诺 我的QQ密码
        [01:16.03]喏 我的微信密码
        [01:18.13]诺 我的淘宝密码
        [01:20.29]喏 我的银行密码
        [01:22.46]我的老公超人 老公的嘴唇超软
        [01:26.50]有一双迷人的眼 有说不出的性感
        [01:30.37]
        [01:31.00]老公老公 mua 左边一个 mua
        [01:35.28]右边一个 mua 嘴巴一个 mua
        [01:39.54]老公老公抱抱 我要公主抱抱
        [01:43.84]飞起来的抱抱 转圈圈的抱抱
        [01:48.09]我的老公超帅 笑起来时超帅
        [01:52.34]牵我手时超帅 摸头杀时超帅
        [01:56.64]我的老公最棒 是我崇拜的对象
        [02:00.70]我亲亲只能你要 这首歌只为你唱
      `,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Musics', null, {});
  }
};
