import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Bodylight from '../views/Bodylight'
import SimpleComponent from '../views/SimpleComponent'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bodylight',
    name: 'Bodylight',
    component: Bodylight
    //component: () => import(/* webpackChunkName: "bodylight" */ '../views/Bodylight.vue')
  },
  {
    path: '/simplecomponent',
    name: 'SimpleComponent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SimpleComponent//() => import(/* webpackChunkName: "simple" */ '../views/SimpleComponent.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
