import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/recipe/:title',
    name: 'recipe',
    component: () => import('../views/Recipe.vue')
  },
  {
    path: '/topic/:title',
    name: 'topic',
    component: () => import('../views/Topic.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
