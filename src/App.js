import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import test from './pages/test/index';
import test2 from './pages/test/index2';
import KTabBar from './components/KTabBar';

const customHistory = createBrowserHistory();
const config = [
  {
    name: 'test2',
    path: '/test2',
    component: test2,
    meta: {
      title: '测试2',
    },
  },
  {
    name: 'test',
    path: '/test',
    component: test,
    meta: {
      title: '测试',
    },
  }];


class App extends React.Component {
  render() {
    const TabConfig = [{
      icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
      activeicon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
      title: 'my',
    },
    {
      icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
      activeicon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
      title: 'my1',
    }, {
      icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
      activeicon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
      title: 'my3',
    }];
    return (
      <div className="App">
        <>
          <Router history={ customHistory }>
            <Route
              exact
              path="/"
              render={ () => (<Redirect to="/test"/>) }
            />
            {
                config.map((item) => (
                  <Route
                    key={ item.path }
                    path={ item.path }
                    render={ props => (
                      <item.component
                        { ...props }
                        routes={ item.routes }
                      />
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
