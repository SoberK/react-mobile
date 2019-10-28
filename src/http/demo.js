import axios from 'axios';

class DemoHttp {
  getdemo() {
    axios.get('/query?type=yuantong&postid=11111111111').then(res => { console.log(res); });
  }
}
export default new DemoHttp();
