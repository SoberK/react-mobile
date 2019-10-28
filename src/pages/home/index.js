import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Swiper from './components/swiper';
import * as demo from '../../redux/action/demo';

class Home extends React.Component {
  demo = () => {
    const { ac: { getData }, count } = this.props;
    getData();
  }

  render() {
    return (
      <div>
        {/* <Swiper/> */}
        <button onClick={ this.demo.bind(this) } >213123</button>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({
  ...state.demo,
});
const mapDispatchToProps = dispatch => ({
  ac: bindActionCreators(demo, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
