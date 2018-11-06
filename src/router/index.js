import Vue from 'vue';
import Router from 'vue-router';

import Index from '../page/index';
import Other from './other';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/manage',
    name: 'manage',
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component: Index,
    children: [Other]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */'../page/login')
  },
  {path: '*', redirect: '/login'}
];

const mode = 'history';

export default new Router({mode, routes});
