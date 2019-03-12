import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui'
import VueParticles from 'vue-particles'
import NProgress from 'nprogress' // progress bar

import 'nprogress/nprogress.css'// progress bar style
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false
NProgress.configure({ showSpinner: false })// NProgress Configuration

Vue.use(ElementUI)
Vue.use(VueParticles)

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  store.state.breadcrumbList = to.meta.breadcrumbList
  store.state.activeMenu = to.name
  if (to.meta.title !== '登陆' && to.meta.title !== '404') {
    let len = store.state.TagsViews.filter(item => item.title === to.meta.title)
    if (len.length === 0) {
      store.state.TagsViews.push({
        title: to.meta.title,
        path: to.path
      })
    }
  }
  document.title = to.meta.title
  next()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
