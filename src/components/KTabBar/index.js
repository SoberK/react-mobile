import React from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import './index.less';

class KTabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.TabConfig[0].title,
    };
  }

  render() {
    const { TabConfig } = this.props;
    const { selected } = this.state;
    return (
      <div >
        <div>
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
                    } }
                  >
                  </TabBar.Item>
                ))
              }
          </TabBar>
        </div>
      </div>
    );
  }
}

KTabBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  TabConfig: PropTypes.array.isRequired,
};

export default KTabBar;
