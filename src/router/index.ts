import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/plot',
    name: 'Plot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Plot.vue')
  },
  {
    path: '/piechart',
    name: 'PieChart',
    component: () => import(/* webpackChunkName: "about" */ '../views/PieChart.vue')
  },
  {
    path: '/booklists',
    name: 'BookLists',
    component: () => import(/* webpackChunkName: "about" */ '../views/BookLists.vue')
  },
  {
    path: '/applications',
    name: 'Applications',
    component: () => import(/* webpackChunkName: "about" */ '../views/Applications.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
