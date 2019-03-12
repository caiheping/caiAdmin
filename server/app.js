(async function () {
  const Koa = require('koa')
  const router = require('./router/index')
  const bodyParser = require('koa-bodyparser')
  const StaticCache = require('koa-static-cache')
  // const jwtKoa = require('koa-jwt')

  // const errorHandle = require('./middlewares/errorHandle.js')
  // const sendHandle = require('./middlewares/sendHandle.js')

  const app = new Koa()
  // app.use(sendHandle())
  // app.use(errorHandle)

  // const secret = 'cai'

  // app.use(jwtKoa({secret}).unless({
  //   path: [/\/login/, /\/static\/*/] //数组中的路径不需要通过jwt验证
  // }))

  // 静态资源
  app.use(StaticCache('./static/', {
    prefix: '/static/',
    gzip: true
  }));

  app.use(bodyParser())
  app.use(router.routes())
  app.listen(8888)
})()
