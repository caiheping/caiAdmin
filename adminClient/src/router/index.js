import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login.vue'),
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/layout',
      component: () => import('../views/layout/layout.vue'),
      children: [
        {
          path: '/',
          redirect: 'home',
          meta: {
            title: '首页',
            breadcrumbList: ['首页']
          }
        },
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/home/home.vue'),
          meta: {
            title: '首页',
            breadcrumbList: ['首页']
          }
        },
        {
          path: 'musicLists',
          name: 'musicLists',
          component: () => import('../views/musicManagement/musicLists.vue'),
          meta: {
            title: '音乐列表',
            breadcrumbList: ['音乐模块', '音乐列表']
          }
        },
        // 影视
        {
          path: 'film',
          name: 'foodLists',
          component: () => import('../views/movieManagement/film.vue'),
          meta: {
            title: '电影列表',
            breadcrumbList: ['影视模块', '电影列表']
          }
        },
        {
          path: 'TV',
          name: 'TV',
          component: () => import('../views/movieManagement/TV.vue'),
          meta: {
            title: '电视剧列表',
            breadcrumbList: ['影视模块', '电视剧列表']
          }
        },
        {
          path: 'anime',
          name: 'anime',
          component: () => import('../views/movieManagement/anime.vue'),
          meta: {
            title: '动漫列表',
            breadcrumbList: ['影视模块', '动漫列表']
          }
        },
        {
          path: 'userLists',
          name: 'userLists',
          component: () => import('../views/userManagement/userLists.vue'),
          meta: {
            title: '用户列表',
            breadcrumbList: ['用户模块', '用户列表']
          }
        },
        {
          path: 'setting',
          name: 'setting',
          component: () => import('../views/setting/index.vue'),
          meta: {
            title: '系统设置',
            breadcrumbList: ['系统设置']
          }
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue'),
      meta: {
        title: '404'
      }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
