import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Home from '@/components/home/index'
import Site from '@/components/sites/index'
import GameIndex from '@/components/game'
import GameHome from '@/components/game/index'
import GameSixmark from '@/components/game/sixmark'
import PlayCategory from '@/components/game/playCategory'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Index,
    },
    {
      path: '/home',
      component: Index,
      children: [{
        path: '',
        component: Index
      }, {
        path: 'index',
        component: Home,
      }, {
        path: 'sites',
        component: Site,
      }]
    },
    {
      path: '/game',
      component: GameIndex,
      children: [{
          path: '',
          component: GameHome
        },
        {
          path: 'sixmark',
          component: GameSixmark
        },
        {
          path: 'playCategory',
          component: PlayCategory
        }
      ]
    }
  ]
})
