import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout/index'

Vue.use(Router)

export default new Router({
  mode: 'history',   
  routes: [
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    }
  ]
})
