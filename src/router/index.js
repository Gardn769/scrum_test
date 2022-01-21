import Vue from 'vue'
import VueRouter from 'vue-router'


import Backlog from '../views/Backlog.vue'
import Board from '../views/Board.vue'
import Repositories from '../views/Repositories.vue'
import Chat from '../views/Chat.vue'
import Setting from '../views/Setting.vue'
import CloudFile from '../views/CloudFile.vue'

import NotFound from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/backlog',
    name: 'Backlog',
    component: Backlog
  },
  {
    path: '/board',
    name: 'Board',
    component: Board
  },
  {
    path: '/repositories',
    name: 'Repositories',
    component: Repositories
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  },
  {
    path: '/cloud',
    name: 'CloudFile',
    component: CloudFile
  },
  {
    path: '*',
    component: NotFound 
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
