const Router = require('koa-router')
const jwt = require('jsonwebtoken')
const md5 = require('md5')
const Models = require('../models/index')
const { getSong } = require('../utils/tools')

const secret = 'cai'

const router = new Router()

router.get('/getSong', async (ctx, next) => {
  let musicLists = await Models.Musics.findAndCountAll()
  for (let i = 0; i < musicLists.rows.length; i++) {
    musicLists.rows[i].lyrics = getSong(musicLists.rows[i].lyrics)
  }
  if (!musicLists) {
    ctx.body = {
      code: 1,
      data: '查询失败'
    }
  } else {
    ctx.body = {
      code: 0,
      data: musicLists
    }
  }
})

// 登陆接口
router.post('/login', async (ctx, next) => {
  console.log(JSON.stringify(ctx.request))
  let username = ctx.request.body.username.trim();
  let password = ctx.request.body.password.trim();
  if (username == '' || password == '') {
    return ctx.body = {
      code: 1,
      data: '用户名或密码不能为空'
    }
  }

  let user = await Models.User.findOne({
    where: {
      username
    }
  });

  if (user === null) {
    return ctx.body = {
      code: 1,
      data: '不存在该用户'
    }
  }
  user = await Models.User.findOne({
    where: {
      username,
      password: md5(password)
    }
  });
  if (user === null) {
    return ctx.body = {
      code: 1,
      data: '密码错误'
    }
  }

  ctx.cookies.set('uid', user.get('id'), {
    httpOnly: false
  });

  const token = jwt.sign(
    {
      id: user.get('id'),
      username: user.get('username')
    },
    secret,
    {expiresIn: '1h'}
  )
  ctx.body = {
    code: 0,
    data: {
      username: user.get('username'),
      id: user.get('id'),
      avator: user.get('avator')
    },
    token
  }
});

module.exports = router
