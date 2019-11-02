import React from 'react';
import { ListView, PullToRefresh } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as action from '../../redux/action/topic';
import KLazyLoad from '../../components/KLazyLoad';
import style from './index.module.less';

class Topic extends React.Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      pageSize: 3,
      pageNow: 1,
      dataSource,
    };
  }

  componentDidMount() {
    const { action: { TOPICDATA_REQUES } } = this.props;
    const { pageNow, pageSize } = this.state;
    TOPICDATA_REQUES(pageNow, pageSize);
  }

  handleRefresh=() => {

    // }, 1000);
  }

  render() {
    const { topicData: { topData: { data } } } = this.props;
    const { refreshing, dataSource, pageSize } = this.state;
    console.log(data);
    return (
      <ListView
        initialListSize={ pageSize }
        pageSize={ pageSize }
        dataSource={ dataSource.cloneWithRows(data) }
        renderRow={ (e) => (
          <div key={ e.id } className={ style.box }>
            <div className={ style.img }>
              <KLazyLoad url={ e.scene_pic_url }/>
            </div>
            <p className={ style.title }>{e.title}</p>
            <p className={ style.subtitle }>{e.subtitle}</p>
            <p className={ style.price }>{e.price_info}元起</p>
          </div>
        ) }
        useBodyScroll
        onEndReached={
          this.handleRefresh
        }
        renderFooter={ () => (
          <p >
            {this.state.hasMore ? '正在加载更多的数据...' : '已经全部加载完毕'}
          </p>
        ) }
        onEndReachedThreshold={ 100 }
        pullToRefresh={ (
          <PullToRefresh
            direction="down"
            refreshing={ refreshing }
            onRefresh={ this.handleRefresh }
          />
          ) }
      />
    );
  }
}

Topic.propTypes = {
  action: PropTypes.objectOf(PropTypes.func).isRequired,
  topicData: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.number])),
};

Topic.defaultProps = {
  topicData: {},
};


const mapStateToProps = state => ({
  topicData: state.topic,
});
const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(action, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
