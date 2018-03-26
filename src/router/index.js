import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Home from '@/components/home/index'
import Message from '@/components/message'
import MessageIndex from '@/components/message/index'
import NoticeIndex from '@/components/message/notice'
import GuestBook from '@/components/message/guestbook'
import SiteIndex from '@/components/sites/index'
import Site from '@/components/sites'
import GameIndex from '@/components/game'
import GameHome from '@/components/game/index'
import GameSixmark from '@/components/game/sixmark'
// 权限 
import Jurisdiction from '@/components/jurisdiction'
import Role from '@/components/jurisdiction/role'
import Department from '@/components/jurisdiction/department'
import Resource from '@/components/jurisdiction/resource'
import Staff from '@/components/jurisdiction/staff'
import PlayCategory from '@/components/game/playCategory'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Index,
    },
    {
      path: '/sites',
      component: Site,
      children: [{
        path: '',
        component: SiteIndex
      }]
    },
    {
      path: '/message',
      component: Message,
      children: [{
        path: '',
        component: MessageIndex
      }, {
        path: 'message',
        component: MessageIndex
      }, {
        path: 'notice',
        component: NoticeIndex
      }, {
        path: 'guestbook',
        component: GuestBook
      }]
    },
    {
      path: '/jurisdiction',
      component: Jurisdiction,
      children: [{
          path: 'role',
          component: Role
        },
        {
          path: 'department',
          component: Department
        },
        {
          path: 'staff',
          component: Staff
        },
        {
          path: 'resource',
          component: Resource
        }
      ]
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
    },

  ]
})
