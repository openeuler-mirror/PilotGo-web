import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/Login.vue'),
    },
    {
      path: '/home',
      name: 'home',
      redirect:"/overview",
      component: () => import("../views/Home/Home.vue"),
      children:[
        {
          path: '/overview',
          name: 'overview',
          component: () => import('../views/Overview/Overview.vue'),
        },
      ]
    },
    {
      path: '/usermanager',
      name: 'UserManager',
      component: () => import('@/views/UserManager/UserManage.vue'),
      meta: {
        title: 'usermanager',
        header_title: '用户管理',
        panel: 'usermanager',
        icon_class: 'el-icon-user-solid',
        breadcrumb: [{ name: '用户管理' }],
      },
    },
  ],
});

export default router;
