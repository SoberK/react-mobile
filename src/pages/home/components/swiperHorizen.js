import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import PropTypes from 'prop-types';
import style from './components.module.less';

const Swiper = ({ banner }) => (
  <>
    <p className={ style.title }>专题精选</p>
    <WingBlank style={ { margin: 0 } }>
      <Carousel
        autoplay
        infinite
        slideWidth={ 0.8 }
        cellSpacing={ 10 }
      >
        {banner.map(val => (
          <div key={ val.id }>
            <img
              src={ val.scene_pic_url }
              alt="11"
              style={ { width: '100%', verticalAlign: 'top' } }
              onLoad={ () => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
              } }
            />
          </div>

        ))}
      </Carousel>
    </WingBlank>
  </>

);
Swiper.propTypes = {
  banner: PropTypes.arrayOf(PropTypes.object),
};
Swiper.defaultProps = {
  banner: [],
};

export default Swiper;
