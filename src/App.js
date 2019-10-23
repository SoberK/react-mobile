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
      title: 'my',
      url: '/test',
    },
    {
      icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
      activeicon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
      title: 'my1',
      url: '/test2',

    }, {
      icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
      activeicon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
      title: 'my3',
      url: '/test3',

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
