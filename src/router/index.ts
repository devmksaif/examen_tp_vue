import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ex1',
      component: HomeView,
    },
    {
      path: '/ex1',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ex2',
      name: 'ex2',
 
      component: () => import('../views/CaisseRestaurant.vue'),
    },
  ],
})

export default router
