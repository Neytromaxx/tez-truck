import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
      component: () => import('../views/IntroView.vue')
    }
  ]
})


// router.beforeEach((to, from, next) => {
//   const introShown = localStorage.getItem('introShown')
//   const aboutShown = localStorage.getItem('aboutShown')

//   if (!introShown && to.name !== 'start') {
//     next({ name: 'start' })
//   } else if(!aboutShown && to.name !== 'about'){
//     next({ name: 'about' })
//   } else {
//     next()
//   }
// })

export default router
