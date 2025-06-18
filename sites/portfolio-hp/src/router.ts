import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Portfolio1',
    component: () =>
      import(
        /* webpackChunkName: "portfolio1" */ 'src/views/PortfolioPage1.vue'
      ),
  },
  {
    path: '/photography',
    name: 'Photography1',
    component: () =>
      import(
        /* webpackChunkName: "photography1" */ 'src/views/PhotographyPage1.vue'
      ),
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
