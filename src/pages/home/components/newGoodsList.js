import React from 'react';
import PropTypes from 'prop-types';
import style from './components.module.less';
import KLazyLoad from '../../../components/KLazyLoad';


const NewGoodsList = ({ newGoodsList }) => (
  <div className={ style.newGoodsList }>
    <p className={ style.title }>新品首发</p>
    <div className={ style.newGoodsListBox }>
      {
          newGoodsList.map(e => (
            <div className={ style.list } key={ e.id }>
              <div className={ style.listimg }>
                <KLazyLoad url={ e.list_pic_url }/>
              </div>
              <p className={ style.goodsTitle }>{e.name}</p>
              <p className={ style.money }>￥{e.retail_price}元</p>
            </div>
          ))
        }

    </div>
  </div>
);

NewGoodsList.propTypes = {
  newGoodsList: PropTypes.arrayOf(PropTypes.object),
};
NewGoodsList.defaultProps = {
  newGoodsList: [],
};

export default NewGoodsList;
