import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/scheduler-settings',
      name: 'settings',
      component: () => import('../views/SchedulerSettings.vue'),
      alias: '/',
    },
    {
      path: '/scheduler-view',
      name: 'table',
      component: () => import('../views/SchedulerView.vue'),
    },
  ],
})

export default router
