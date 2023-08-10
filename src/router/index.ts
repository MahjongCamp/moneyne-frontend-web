import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import Analysis from 'views/analysis/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/analysis',
    children: [
      {
        path: 'analysis',
        name: 'Analysis',
        component: Analysis
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(), // history 模式则使用 createWebHistory()
  routes
})

export default router
