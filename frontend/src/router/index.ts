import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:"/home",
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../views/Login/Login.vue")
    },
    {
      path: '/home',
      name: 'home',
      component: () => import("../views/Home/Home.vue")
    },
  ]
})

export default router
