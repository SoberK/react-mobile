import React from 'react';
import PropTypes from 'prop-types';
import style from './components.module.less';
import KLazyLoad from '../../../components/KLazyLoad';

const BrandList = ({ brandList }) => (
  <div className={ style.brandList }>
    <p className={ style.title }>品牌制造商直供</p>
    <div className={ style.list }>
      {
          brandList.map(e => (
            <div className={ style.box } key={ e.id }>
              <p className={ style.boxtitle }> {e.name}</p>
              <div className={ style.price }>{e.floor_price}元起</div>
              <KLazyLoad url={ e.new_pic_url }/>
            </div>
          ))
          }
    </div>
  </div>
);

BrandList.propTypes = {
  brandList: PropTypes.arrayOf(PropTypes.object),
};
BrandList.defaultProps = {
  brandList: [],
};


export default BrandList;
