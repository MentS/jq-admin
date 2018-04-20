import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout/index'

import Notice from '../modules/message/notice.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',   
  routes: [
    {
      path: '/layout',
      name: 'Layout',
      component: Layout,
      children: [{
        path: '/message/notice',
        name: 'Notice',
        component: Notice,
      }]
    }
  ]
})
