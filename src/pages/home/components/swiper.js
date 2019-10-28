import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

export default class Swiper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
    };
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  render() {
    const { data, imgHeight } = this.state;
    return (
      <WingBlank>
        <Carousel
          autoplay={ false }
          infinite
          beforeChange={ (from, to) => console.log(`slide from ${from} to ${to}`) }
          afterChange={ index => console.log('slide to', index) }
        >
          {data.map(val => (
            <img
              src={ `https://zos.alipayobjects.com/rmsportal/${val}.png` }
              alt=""
              style={ { width: '100%', verticalAlign: 'top' } }
              onLoad={ () => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              } }
            />
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}
