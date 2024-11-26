import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

//配置路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Homepage',
    meta: { title: 'Homepage' },
    component: () => import('@/views/Homepage.vue')
  },
  {
    path: '/template/1',
    name: 'ContentTemplate',
    meta: { title: 'ContentTemplate' },
    component: () => import('@/views/ThemePage/themePageTemplate1.vue')
  },
  {
    path: '/template/2',
    name: 'ListTemplate',
    meta: { title: 'ListTemplate' },
    component: () => import('@/views/ThemePage/themePageTemplate2.vue')
  },
  {
    path: '/template/3',
    name: 'ListTextTemplate',
    meta: { title: 'ListTextTemplate' },
    component: () => import('@/views/ThemePage/themePageTemplate3.vue')
  },

  {
    path: '/:cathAll(.*)',
    name: '404NotFound',
    meta: { title: '404 Not Found' },
    component: () => import('@/views/Error404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  next()
})
export default router
