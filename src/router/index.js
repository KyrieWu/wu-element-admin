import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* 引入最外层骨架的一级路由组件*/
// import Layout from '@/layout'
import dashboard from '@/views/dashboard'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import(/* webpackChunkName:"Login"*/'@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName:"Page404" */'@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import(/* webpackChunkName:"Page401" */'@/views/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/',
    component: dashboard
    // redirect: '/dashboard',
    // children: [
    //   {
    //     path: 'dashboard',
    //     name: 'Dashboard',
    //     component: () => import('@/views/dashboard/index'),
    //     meta: { title: '首页', icon: 'dashboard' }
    //   }
    // ]
  }
]

export const asyncRoutes = []

// 任意路由：当路径出现错误的时候重定向404
export const anyRoutes = { path: '*', redirect: '/404', hidden: true }

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
