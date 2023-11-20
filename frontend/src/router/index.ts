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
  },
];

let sidebarRoutes = [
  {
    path: '/home',
    name: 'home',
    redirect: '/overview',
    component: () => import('@/views/Home/Home.vue'),
    children: [
      {
        path: '/overview',
        name: 'overview',
        component: () => import('@/views/Overview/Overview.vue'),
        meta: {
          title: 'overview',
          header_title: '概览',
          panel: 'overview',
          icon: 'HomeFilled',
          breadcrumb: [{ name: '概览' }],
        },
      },
      {
        path: '/cluster',
        meta: { title: 'cluster', header_title: "系统", panel: "cluster", icon: 'Platform' },
        children: [
          {
            path: '',
            // redirect: '/cluster/macList'
            redirect: '/cluster/createBatch'
          },
          {
            path: '/cluster/macList',
            name: 'macList',
            component: () => import('../views/Cluster/Cluster.vue'),
            meta: {
              header_title: "机器列表",
              panel: "/cluster/macList",
              breadcrumb: [
                {
                  name: '系统', path: '/cluster', children: [
                    { name: 'createBatch', menuName: '创建批次' },
                  ]
                },
                { name: '机器列表' },
              ],
              icon: ''
            }
          },
          {
            path: '/cluster/createBatch',
            name: 'createBatch',
            component: () => import('../views/Cluster/CreateBatch.vue'),
            meta: {
              header_title: "创建批次",
              panel: "/cluster/createBatch",
              breadcrumb: [
                {
                  name: '系统', path: '/cluster', children: [
                    { name: 'macList', menuName: '机器列表' },
                  ]
                },
                { name: '创建批次' },
              ],
              icon: ''
            }
          }
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
          icon: 'el-icon-user-solid',
          breadcrumb: [{ name: '用户管理' }],
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...commonRoutes, ...sidebarRoutes],
});

export default router;

import { routerStore, type Menu } from '@/stores/router';
export function updateSidebarItems() {
  let menus = [];
  for (let route of sidebarRoutes[0].children) {
    // 迭代 /home 下的所有组件
    let obj: Menu = {
      path: route.path,
      title: route.meta.header_title,
      hidden: false,
      panel: route.meta.panel,
      icon: route.meta.icon,
      subMenus: null,
    };

    menus.push(obj);
  }

  routerStore().menus = menus;
}
