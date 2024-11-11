import { createRouter, createWebHistory } from 'vue-router';
import LandingPageView from '../Views/LandingPageView.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPageView,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
