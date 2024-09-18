import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/components/Layout.vue';
import Board from '@/components/Board.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'project/:id',
        component: Board,
        props: true,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;