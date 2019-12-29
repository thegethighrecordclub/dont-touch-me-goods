import React, { Component } from 'react';
import Good from './Good';
class DontTouchMe extends Component {
  render() {
    let goods = ['star', 'heart', 'circle', 'heart'];

    goods = goods.map((shape, i) => (
      <Good shape={shape} i={i} key={'good-' + i} />
    ));
    // goods = goods.concat(goods);
    // goods = goods.concat(goods);

    return (
      <div className='container'>
        <header>
          <h1>Don't Touch Me Goods</h1>
          <h4 className='description'>DM to Buy</h4>
        </header>
        <div className='goods'>{goods}</div>
      </div>
    );
  }
}


export default DontTouchMe;
