import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Swiper from './components/swiper';
import * as home from '../../redux/action/home';
import Channel from './components/channel';
import BrandList from './components/brandList';
import NewGoodsList from './components/newGoodsList';
import HotGoodsList from './components/hotGoodsList';
import SwiperHorizen from './components/swiperHorizen';
import CategoryList from './components/categoryList';

class Home extends React.Component {
  // eslint-disable-next-line react/no-deprecated
  componentDidMount() {
    const { action: { GET_DATA_REQUEST_ACTION } } = this.props;
    GET_DATA_REQUEST_ACTION();
  }

  render() {
    const { data: { banner, channel, brandList,
      newGoodsList, hotGoodsList, topicList, categoryList } } = this.props;
    return (
      <div style={ { paddingBottom: '20px' } }>
        <Swiper banner={ banner }/>
        <Channel channel={ channel }/>
        <BrandList brandList={ brandList }/>
        <NewGoodsList newGoodsList={ newGoodsList }/>
        <HotGoodsList hotGoodsList={ hotGoodsList }/>
        <SwiperHorizen banner={ topicList }/>
        <CategoryList newGoodsList={ categoryList }/>
      </div>
    );
  }
}

Home.propTypes = {
  action: PropTypes.objectOf(PropTypes.func).isRequired,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
Home.defaultProps = {
  data: {},
};

const mapStateToProps = (state) => ({
  ...state.home,
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(home, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
