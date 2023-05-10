import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'
import { ElMessage } from 'element-plus'

// import localCache from '@/utils/cache.js'

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/write',
    name: 'write',
    component: () => import('@/views/write/write.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/views/article/article.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/not-found.vue')
  },
  {
    path: '/article_detail:id?',
    name: 'article_detail',
    component: () => import('@/views/article/detail.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 导航守卫
router.beforeEach(to => {
  if (to.path !== '/login' && to.path !== '/main') {
    const login = store.state.loginState

    if (!login) {
      ElMessage({
        message: '请先进行登录',
        type: 'info'
      })
      return '/login'
    }
  }

  if (to.path === '/main') {
    return
  }
})

export default router
