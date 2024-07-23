import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MintView from '../views/MintView.vue'
import PopupView from '../views/PopupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mint',
      name: 'mint',
      component: MintView
    },
    {
      path: '/popup',
      name: 'popup',
      component: PopupView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/PopupView.vue')
    }
  ]
})

export default router
