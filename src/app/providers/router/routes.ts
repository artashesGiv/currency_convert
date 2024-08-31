import type { RouteRecordRaw } from 'vue-router'
import { Routes } from '@/shared'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: Routes.HOME,
    component: () => import('@/pages/home/Home.vue'),
    meta: {
      data: {
        title: 'Главная',
        navigate: 'Главная',
      },
    },
  },
  {
    path: '/convert',
    name: Routes.CONVERT,
    component: () => import('@/pages/convert/Convert.vue'),
    meta: {
      data: {
        title: 'Конвертер',
        navigate: 'Конвертер',
      },
    },
  },
]
