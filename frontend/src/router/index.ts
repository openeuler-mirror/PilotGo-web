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
    redirect: "/overview",
    component: () => import("../views/Home/Home.vue"),
    children: [
      {
        path: '/overview',
        name: 'overview',
        component: () => import('../views/Overview/Overview.vue'),
        meta: {
          title: 'overview', header_title: "概览", panel: "overview", icon: 'HomeFilled',
          breadcrumb: [
            { name: '概览' },
          ]
        }
      },
      {
        path: '/usermanager',
        name: 'UserManager',
        component: () => import('@/views/UserManager/UserManage.vue'),
        meta: {
          title: 'usermanager',
          header_title: '用户管理',
          panel: 'usermanager',
          icon: 'el-icon-user-solid',
          breadcrumb: [{ name: '用户管理' }],
        },
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...commonRoutes, ...sidebarRoutes],
});

export default router;

import { routerStore, type Menu } from "@/stores/router";
export function updateSidebarItems() {
  let menus = []
  for (let route of sidebarRoutes[0].children) {

    // 迭代 /home 下的所有组件
    let obj: Menu = {
      path: route.path,
      title: route.meta.header_title,
      hidden: false,
      panel: route.meta.panel,
      icon: route.meta.icon,
      subMenus: null,
    }

    menus.push(obj)
  }

  routerStore().menus = menus
}