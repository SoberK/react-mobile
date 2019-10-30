import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Swiper from './components/swiper';
import * as home from '../../redux/action/home';

class Home extends React.Component {
  // eslint-disable-next-line react/no-deprecated
  componentDidMount() {
    const { action: { GET_DATA_REQUEST_ACTION } } = this.props;
    GET_DATA_REQUEST_ACTION();
  }

  render() {
    const { data: { banner } } = this.props;

    return (
      <div>
        <Swiper banner={ banner }/>
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
