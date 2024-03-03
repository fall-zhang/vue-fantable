import routers from './locale'

import BlankLayout from '@/comp/layout/empty-layout.vue'

const docLayout = () => import('@/comp/layout/doc-layout.vue')

export default [
  {
    path: '/',
    redirect: '/zh',
  }, // 默认路由
  {
    path: '/:pathMatch(.*)*', // 页面不存在的情况下会跳到首页
    redirect: '/',
  },
  {
    path: '/changelog', // 页面不存在的情况下会跳到首页
    component: () => import('@/pages/changelog/index.vue'),
  },
  {
    path: '/zh',
    component: BlankLayout,
    redirect: '/zh/demo',
    children: [
      {
        path: 'demo',
        component: () => import('@/pages/demo/index.vue'),
        name: 'demo-zh',
        meta: { keepAlive: false, hide: true },
      },
      {
        path: 'doc',
        component: docLayout,
        redirect: '/zh/doc/intro',
        children: routers.zh,
      },
      {
        path: 'changelog',
        component: () => import('@/pages/demo/index.vue'),
        name: 'changelog-zh',
        meta: { keepAlive: false, hide: true },
      },
    ],
  },
  {
    path: '/en',
    component: BlankLayout,
    redirect: '/en/demo',
    children: [
      {
        path: 'demo',
        component: () => import('@/pages/demo/index.vue'),
        name: 'demo-en',
        meta: { keepAlive: false, hide: true },
      },
      {
        path: 'doc',
        component: docLayout,
        redirect: '/en/doc/intro',
        children: routers.en,
      },
      {
        path: 'changelog',
        component: () => import('@/pages/demo/index.vue'),
        name: 'changelog-en',
        meta: { keepAlive: false, hide: true },
      },
    ],
  },
]
