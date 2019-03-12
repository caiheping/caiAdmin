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
      path: '/test',
      component: () => import('../views/test.vue')
    },
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/layout',
      name: 'layout',
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
        // 美食
        {
          path: 'foodLists',
          name: 'foodLists',
          component: () => import('../views/foodManagement/foodLists.vue'),
          meta: {
            title: '美食模块',
            breadcrumbList: ['美食模块', '美食列表']
          }
        },
        {
          path: 'foodCategorys',
          name: 'foodCategorys',
          component: () => import('../views/foodManagement/foodCategorys.vue'),
          meta: {
            title: '美食类目',
            breadcrumbList: ['美食模块', '美食类目']
          }
        },
        {
          path: 'foodTags',
          name: 'foodTags',
          component: () => import('../views/foodManagement/foodTags.vue'),
          meta: {
            title: '美食标签',
            breadcrumbList: ['美食模块', '美食标签']
          }
        },
        {
          path: 'userLists',
          name: 'userLists',
          component: () => import('../views/userManagement/userLists.vue'),
          meta: {
            title: '用户模块',
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
    }
  ]
})
