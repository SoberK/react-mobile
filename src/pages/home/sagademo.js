import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as home from '../../redux/action/home';

class Home extends React.Component {
  getData() {
    const { action: { GET_DATA_REQUEST_ACTION } } = this.props;
    GET_DATA_REQUEST_ACTION('yuantong', '11111111111');
  }

    demo = () => {
      console.log(this.props);
      const { action: { CHANGE_COUNT_ACTION } } = this.props;
      CHANGE_COUNT_ACTION();
    }

    render() {
      const { count, data } = this.props;
      return (
        <div>
          <button type="button" onClick={ this.demo.bind(this) } >添加</button>
          <div>
        count:{count}
          </div>
          <button type="button" onClick={ this.getData.bind(this) } >获取数据</button>
          <div>
        data:{JSON.stringify(data)}
          </div>
        </div>
      );
    }
}

Home.propTypes = {
  count: PropTypes.number,
  data: PropTypes.objectOf(PropTypes.string),
  action: PropTypes.func.isRequired,
};
Home.defaultProps = {
  count: 0,
  data: {},
};


const mapStateToProps = (state) => ({
  ...state.home,
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(home, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
