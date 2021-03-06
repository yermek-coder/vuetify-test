import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyTable from '../components/MyTable.vue'
import InputArea from '../components/InputArea.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/input',
    children: [
      {
        path: '/input',
        name: 'input',
        component: InputArea,
      },
      {
        path: '/table',
        name: 'table',
        component: MyTable,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
