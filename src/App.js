import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import './utils/rem';
import KTabBar from './components/KTabBar';
import config from './router/config';

const customHistory = createBrowserHistory();


class App extends React.Component {
  render() {
    const TabConfig = [{
      icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
      activeicon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
      title: '首页',
      url: '/home',
    },
    {
      icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
      activeicon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
      title: '专题',
      url: '/topic',

    }, {
      icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
      activeicon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
      title: '分类',
      url: '/classes',
    }, {
      icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
      activeicon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
      title: '购物车',
      url: '/shopCar',
    }, {
      icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
      activeicon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
      title: '我的',
      url: '/my',
    }];
    return (
      <div className="App">
        <>
          <Router history={ customHistory }>
            <Route
              exact
              path="/"
              render={ () => (<Redirect to="/home"/>) }
            />
            {
                config.map((item) => (
                  <Route
                    exact
                    key={ item.path }
                    path={ item.path }
                    render={ props => (
                      <div className="pageContent">
                        <item.component
                          { ...props }
                          routes={ item.routes }
                        />
                      </div>
                    ) }
                  />
                ))
              }
            <KTabBar TabConfig={ TabConfig }/>
          </Router>
        </>
      </div>
    );
  }
}

export default App;
