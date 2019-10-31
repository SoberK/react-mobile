import React from 'react';
import PropTypes from 'prop-types';
import style from './components.module.less';
import KLazyLoad from '../../../components/KLazyLoad';


const HotGoodsList = ({ hotGoodsList }) => (
  <div className={ style.hotGoodsList }>
    <p className={ style.title }>人气推荐</p>
    <div className={ style.hotGoodsListbox }>
      {
                hotGoodsList.map(e => (
                  <div className={ style.boxlist } key={ e.id }>
                    <div className={ style.listimg }>
                      <KLazyLoad url={ e.list_pic_url }/>
                    </div>
                    <div className={style.textbox}>
                        <p className={ style.goodsTitle }>{e.name}</p>
                        <p className={ style.goodsDes }>{e.name}</p>
                      <p className={ style.money }>￥{e.retail_price}元</p>
                    </div>

                  </div>
                ))
            }
    </div>
  </div>
);

HotGoodsList.propTypes = {
  hotGoodsList: PropTypes.arrayOf(PropTypes.object),
};
HotGoodsList.defaultProps = {
  hotGoodsList: [],
};

export default HotGoodsList;
