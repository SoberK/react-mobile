import HttpUtils from './http';

export default {
  getHomeData(params) {
    return HttpUtils.get('/', params);
  },
  getTopicData(params) {
    return HttpUtils.get('/topic/list', params);
  },
};
