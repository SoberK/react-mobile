import axios from 'axios';

class DemoHttp {
  getdemo(type, postid) {
    return axios.get(`/query?type=${type}&postid=${postid}`);
  }
}
export default new DemoHttp();
