import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

//配置路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Homepage',
    meta: { title: 'Homepage' },
    component: () => import('../views/homePage.vue')
  },
  {
    path: '/refresh',
    name: 'Refresh',
    component: () => import('../utils/refresh.vue')
  },

  {
    path: '/careers',
    name: 'Careers',
    meta: { title: 'Careers' },
    component: () => import('../views/careersPage.vue')
  },
  // {
  //   path: '/displayCase',
  //   name: 'DisplayCase',
  //   meta: { title: 'DisplayCase' },
  //   component: () => import('../views/displayCagePage.vue')
  // },
  {
    path: '/:cathAll(.*)',
    name: '404NotFound',
    meta: { title: '404 Not Found' },
    component: () => import('../views/Error404.vue')
  }
]

const router = createRouter({
  history: createWebHistory((import.meta as any).env?.VITE_BASE_PATH),
  routes
})
router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  next()
})
export default router
