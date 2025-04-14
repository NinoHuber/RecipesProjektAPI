import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LazanjeView from '@/views/LazanjeView.vue'
import PizzaView from '@/views/PizzaView.vue'
import KrofneView from '@/views/KrofneView.vue'
import PastaView from '@/views/PastaView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import RandomView from '@/views/RandomView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/lazanje',
      name: 'lazanje',
      component: LazanjeView,
    },
    {
      path: '/pizza',
      name: 'pizza',
      component: PizzaView,
    },
    {
      path: '/krofne',
      name: 'krofne',
      component: KrofneView,
    },
    {
      path: '/pasta',
      name: 'pasta',
      component: PastaView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
    {
      path: '/random',
      name: 'random',
      component: RandomView,
    }
  ],
})

export default router

