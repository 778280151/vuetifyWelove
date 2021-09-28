import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
// import Layout from '@/layout'
// import photoshow from '@/views/welovephotoshow/index'
// import userManagement from '@/views/welovesetting/user/user'
// import menu from '@/views/welovesetting/menu/index'
import indexA from '@/views/A/index'
import indexB from '@/views/B/index'
// import request from '@/utils/request'
Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/welovehome/index'),
    redirect: '/weLoveIndex',
    children: [{
      path: 'weLoveIndex',
      name: 'weLoveIndex',
      component: () => import('@/views/A/index'),
      meta: {title: 'Dashboard', icon: 'dashboard'}
    }]
  },

  {
    path: '/adminIndex',
    component: () => import('@/views/adminhome/home'),
    // redirect: '/example/table',
    name: 'adminIndex',
    meta: {title: 'Example', icon: 'example'},
  },

  {
    path: '/login',
    component: () => import('@/views/login/login'),
    // redirect: '/example/table',
    name: 'login',
    meta: {title: 'Example', icon: 'example'},
  },

  {
    path: '/exampleA',
    component: indexA,
    // redirect: '/example/table',
    name: 'ExampleA',
    meta: {title: 'Example', icon: 'example'},
  },

  {
    path: '/exampleB',
    component: indexB,
    // redirect: '/example/table',
    name: 'ExampleB',
    meta: {title: 'Example', icon: 'example'},
    // children: [
    //   {
    //     path: 'table',
    //     name: 'Table',
    //     component: () => import('@/views/B/index'),
    //     meta: { title: 'Table', icon: 'table' }
    //   },
    //   {
    //     path: 'tree',
    //     name: 'Tree',
    //     component: () => import('@/views/A/index'),
    //     meta: { title: 'Tree', icon: 'tree' }
    //   }
    // ]
  },
  //
  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/setting',
  //   component: Layout, // Parent router-view
  //   name: '系统设置',
  //   meta: { title: '系统设置', icon: 'artcle' },
  //   children: [
  //     {
  //       path: '/setting/database',
  //       component: () => import('@/views/DataBase/index'),
  //       name: '数据库相关',
  //       meta: { title: '数据库相关', icon: '储存数据数据库' }
  //     },
  //     {
  //       path: '/setting/photoshow',
  //       component: photoshow,
  //       name: '照片管理',
  //       meta: { title: '照片管理', icon: 'link' }
  //     },
  //     {
  //       path: '/setting/user',
  //       component: userManagement,
  //       name: '用户管理',
  //       meta: { title: '用户管理', icon: 'user' }
  //     },
  //     {
  //       path: '/setting/menu',
  //       component: menu,
  //       name: '菜单管理',
  //       meta: { title: '菜单管理', icon: 'user' }
  //     }
  //   ]
  // }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()

// 把字符串转换成组件
export const loadView = (view) => {
  return (resolve) => require([`@/views${view}`], resolve)
}

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
