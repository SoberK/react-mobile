import home from '../pages/home/index';
import topic from '../pages/topic/index';
import classes from '../pages/classes/index';
import shopCar from '../pages/shopCar/index';
import my from '../pages/my/index';

export default [
  {
    name: 'home',
    path: '/home',
    component: home,
    isTab: true,
    meta: {
      title: '首页',
    },
  },
  {
    name: 'topic',
    path: '/topic',
    component: topic,
    isTab: true,
    meta: {
      title: '专题',
    },
  },
  {
    name: 'classes',
    path: '/classes',
    component: classes,
    isTab: true,
    meta: {
      title: '分类',
    },
  },
  {
    name: 'shopCar',
    path: '/shopCar',
    component: shopCar,
    isTab: true,
    meta: {
      title: '购物车',
    },
  },
  {
    name: 'my',
    path: '/my',
    component: my,
    isTab: true,
    meta: {
      title: '我的',
    },
  }];
