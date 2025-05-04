import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
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
