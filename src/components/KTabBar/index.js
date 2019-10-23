import React from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import './index.less';
import { withRouter } from 'react-router-dom';
import route from '../../router/config';

class KTabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.TabConfig[0].title,
    };
  }

  render() {
    const { TabConfig, history } = this.props;
    const { selected } = this.state;
    const arr = route.filter(e => e.path === history.location.pathname);
    const { isTab } = arr[0];

    return (
      <div className="tab">
        <div>{
          isTab ? (
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
            >
              {
              TabConfig.map((item) => (
                <TabBar.Item
                  icon={ { uri: item.icon } }
                  selectedIcon={ { uri: item.activeicon } }
                  title={ item.title }
                  key={ item.title }
                  selected={ selected === item.title }
                  onPress={ () => {
                    this.setState({
                      selected: item.title,
                    });
                    history.push(item.url);
                  } }
                >
                </TabBar.Item>
              ))
              }
            </TabBar>
          ) : null
}
        </div>
      </div>
    );
  }
}

KTabBar.propTypes = {
  TabConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(KTabBar);
