import React, { Component } from 'react';

class DontTouchMe extends Component {

  render() {
    return (
      <div className='item'>
        <img
          className={'item-img'}
          alt='cute goods!'
          src={'/dtm-' + this.props.i + '.jpg'}
          style={{ WebkitMaskImage: 'url(' + this.props.shape + '.svg)' }}
        />
      </div>
    );
  }
}

export default DontTouchMe;
