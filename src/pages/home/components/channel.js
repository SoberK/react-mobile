import React from 'react';
import PropTypes from 'prop-types';
import style from './components.module.less';

const Channel = ({ channel }) => (
  <div className={ style.wrap }>
    { channel.map(el => (
      <div className={ style.box } key={ el.id }>
        <img src={ el.icon_url } alt={ el.name }/>
        <p>{el.name}</p>
      </div>
    ))}

  </div>
);
Channel.propTypes = {
  channel: PropTypes.arrayOf(PropTypes.object),
};
Channel.defaultProps = {
  channel: [],
};
export default Channel;
