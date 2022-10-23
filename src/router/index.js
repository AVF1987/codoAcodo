import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
//import About from '../components/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { path:'/about', component: import('../components/About.vue') },
    { path:'/locales', component: import('../components/Locales.vue') },
    { path:'/contacto', component: import('../components/Contacto.vue') },
  ]
})

export default router
