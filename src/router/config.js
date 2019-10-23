import test2 from '../pages/test/index2';
import test from '../pages/test';
import test3 from '../pages/test/index3';
import test4 from '../pages/test/index4';

export default [
  {
    name: 'test2',
    path: '/test2',
    component: test2,
    isTab: true,
    meta: {
      title: '测试1',
    },
  },
  {
    name: 'test',
    path: '/test',
    component: test,
    isTab: true,
    meta: {
      title: '测试2',
    },
  },
  {
    name: 'test3',
    path: '/test3',
    isTab: true,
    component: test3,
    meta: {
      title: '测试3',
    },
  },
  {
    name: 'test4',
    path: '/test4',
    component: test4,
    isTab: false,
    meta: {
      title: '测试4',
    },
  }];
