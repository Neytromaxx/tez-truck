import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/start',
      name: 'start',
      alias: '/',
      component: () => import('../views/IntroView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/agent',
      name: 'agent',
      component: () => import('../views/AgentView.vue')
    },
    {
      path: '/owner',
      name: 'owner',
      component: () => import('../views/OwnerView.vue')
    },
    {
      path: '/driver',
      name: 'driver',
      component: () => import('../views/DriverView.vue')
    },
  ]
})


// router.beforeEach((to, from, next) => {
//   const introShown = localStorage.getItem('introShown')
//   const aboutShown = localStorage.getItem('aboutShown')

//   if (!introShown && to.name !== 'start') {
//     next({ name: 'start' })
//   } else if(introShown && !aboutShown && to.name !== 'about'){
//     next({ name: 'about' })
//   } else {
//     next()
//   }
// })

export default router
