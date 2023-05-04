import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
  }
]

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
