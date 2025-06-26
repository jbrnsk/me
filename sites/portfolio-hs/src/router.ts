import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: "Hendrik's Portfolio",
    component: () =>
      import(
        /* webpackChunkName: "portfolio" */ 'src/views/HendrikPortfolio.vue'
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
