import React from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import style from './index.module.less';
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
    let isTab = false;
    if (arr.length > 0) {
      isTab = arr[0].isTab;
    }


    return (
      <div className={ style.tab }>
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
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default withRouter(KTabBar);
