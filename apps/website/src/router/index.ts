import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/WebHome.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/WebBlog.vue'),
  },
  {
    path: '/forum',
    name: 'Forum',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/WebForum.vue'),
  },
  {
    path: '/download',
    name: 'Download',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/WebDownload.vue'),
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
