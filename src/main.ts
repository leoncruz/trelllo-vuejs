import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import NotFound from 'pages/404.vue';
import About from 'pages/About.vue';
import Home from 'pages/Home.vue';

import App from '@/App.vue';

import 'assets/css/index.css';

const routes = [
  { path: '/:pathMatch(.*)*', component: NotFound },
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App, {});

app.use(router);
app.mount('#app');
