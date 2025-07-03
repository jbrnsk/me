import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: "Henry's Portfolio",
    component: () =>
      import(
        /* webpackChunkName: "portfolio" */ 'src/views/HenryPortfolio.vue'
      ),
  },
  {
    path: '/photography',
    name: "Henry's Photography",
    component: () =>
      import(
        /* webpackChunkName: "photography" */ 'src/views/HenryPhotography.vue'
      ),
  },
  { path: '/:catchAll(.*)', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
