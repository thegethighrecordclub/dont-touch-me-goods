import React, { Component } from 'react';

class DontTouchMe extends Component {

  render() {
    let goods = ['star', 'heart', 'circle', 'heart'];

    goods = goods.map((shape, i) => (
      <div className='item'>
        <img
          key={i}
          className={'item-img '  }
          alt='cute goods!'
          src={'/dtm-' + i + '.jpg'}
          style={{ WebkitMaskImage: 'url(' + shape + '.svg)' }}
        />
      </div>
    ));
    goods = goods.concat(goods);
    goods = goods.concat(goods);

    return (
      <div className='container'>
        <header>
          <h1>
            Don't Touch Me Goods
          </h1>
          <h4 className='description'>DM to Buy</h4>
        </header>
        <div className='goods'>{goods}</div>
      </div>
    );
  };
}


export default DontTouchMe;
