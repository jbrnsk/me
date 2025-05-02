import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/SplashPage.vue'),
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () =>
      import(/* webpackChunkName: "portfolio" */ '@/views/PortfolioPage.vue'),
  },
  { path: '/:catchAll(.*)', redirect: '/' },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
