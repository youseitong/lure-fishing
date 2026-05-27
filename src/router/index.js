import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/equipment',
    name: 'Equipment',
    component: () => import('../views/Equipment.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/Skills.vue')
  },
  {
    path: '/fish',
    name: 'Fish',
    component: () => import('../views/Fish.vue')
  },
  {
    path: '/spots',
    name: 'Spots',
    component: () => import('../views/Spots.vue')
  },
  {
    path: '/catches',
    name: 'Catches',
    component: () => import('../views/Catches.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
