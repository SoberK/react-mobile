import React from 'react';
import LazyLoad from 'react-lazy-load';
import PropTypes from 'prop-types';
import INITIMG from '../../logo.svg';
import style from './index.module.less';

class KLazyLoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    const { url } = this.props;
    const img = new Image();
    img.src = url;
    new Promise((reslove) => {
      img.onload = function () {
        reslove();
      };
    }).then(() => {
      this.setState({
        loading: true,
      });
    });
  }

  render() {
    const { url } = this.props;
    const { loading } = this.state;
    const imgSrc = loading ? url : INITIMG;
    return (
      <LazyLoad className={ style.imgbox } >
        <img style={ { width: '100%', height: '100%' } } src={ imgSrc } alt=""/>
      </LazyLoad>
    );
  }
}

KLazyLoad.propTypes = {
  url: PropTypes.string.isRequired,
};


export default KLazyLoad;
