import { createRouter, createWebHistory } from 'vue-router';
import Board from '@/components/Board.vue';

const routes = [
  { path: '/', component: Board },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;