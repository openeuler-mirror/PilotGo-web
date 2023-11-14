import { createRouter, createWebHistory } from 'vue-router';

const commonRoutes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue'),
  }
]

let sidebarRoutes = [
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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...commonRoutes, ...sidebarRoutes],
});

export default router;
