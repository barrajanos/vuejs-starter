import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Landing from './views/Landing.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'landing' }
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/landing',
      name: 'landing',
      component: Landing
    },
    {
      path: '*',
      redirect: { name: 'landing' }
    }
  ]
})
