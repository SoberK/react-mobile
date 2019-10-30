import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import PropTypes from 'prop-types';

const Swiper = ({ banner }) => (
  <WingBlank style={ { margin: 0 } }>
    <Carousel
      autoplay
      infinite
    >
      {banner.map(val => (
        <img
          key={ val.id }
          src={ val.image_url }
          alt="11"
          style={ { width: '100%', verticalAlign: 'top' } }
          onLoad={ () => {
            // fire window resize event to change height
            window.dispatchEvent(new Event('resize'));
          } }
        />
      ))}
    </Carousel>
  </WingBlank>
);
Swiper.propTypes = {
  banner: PropTypes.arrayOf(PropTypes.object),
};
Swiper.defaultProps = {
  banner: [],
};

export default Swiper;
