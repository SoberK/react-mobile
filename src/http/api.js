import HttpUtils from './http';

export default {
  getHomeData(params) {
    return HttpUtils.get('/', params);
  },
};
