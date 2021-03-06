import React from 'react';
import PropTypes from 'prop-types';
import style from './components.module.less';
import KLazyLoad from '../../../components/KLazyLoad';


const NewGoodsList = ({ newGoodsList }) => (
  <div className={ style.newGoodsList }>
    { newGoodsList.map(el => (
      <div key={ el.id }>
        <p className={ style.title }>{el.name}</p>
        <div className={ style.newGoodsListBox }>
          {
                      el.goodsList.map(e => (
                        <div className={ style.list } key={ e.id * Math.random() } >
                          <div className={ style.listimg }>
                            <KLazyLoad url={ e.list_pic_url }/>
                          </div>
                          <p className={ style.goodsTitle }>{e.name}</p>
                          <p className={ style.money }>￥{e.retail_price}元</p>
                        </div>
                      ))
                  }
          <div className={ style.list }>
            <div className={ style.more }>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt=""/>
            </div>
          </div>
        </div>
      </div>
    ))}

  </div>
);

NewGoodsList.propTypes = {
  newGoodsList: PropTypes.arrayOf(PropTypes.object),
};
NewGoodsList.defaultProps = {
  newGoodsList: [],
};

export default NewGoodsList;
