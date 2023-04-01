import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import NotFoundPage from './pages/404.vue';

import './assets/css/index.css';

const routes = [
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App, {})

app.use(router)
app.mount('#app')
