import { createRouter, createWebHistory } from 'vue-router';

import NotFound from 'pages/404.vue';
import About from 'pages/About.vue';
import Home from 'pages/Home.vue';

const routes = [
  { path: '/:pathMatch(.*)*', component: NotFound },
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export { router };