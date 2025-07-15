import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/views/home.vue';
import Room from '@/views/room.vue';
import Whiteboard from '@/views/whiteboard.vue';
import Test from '@/views/test.vue';

const routes = [
  {
    path: '/',
    redirect: '/test',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/test',
    component: Test,
  },
  {
    path: '/room',
    component: Room,
  },
  {
    path: '/whiteboard',
    component: Whiteboard,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
