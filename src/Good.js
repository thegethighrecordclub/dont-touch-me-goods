import React, { Component } from 'react';

class DontTouchMe extends Component {
  constructor(props) {
    super(props);
    this.state = { isShiny: false };
    this.shine = this.shine.bind(this);
  }

  shine() {
    this.setState({
      isShiny: !this.state.isShiny
    })
  }

  render() {
    return (
      <div className='item' onMouseEnter={this.shine} onMouseLeave={this.shine}>
        <img
          className={'item-img'}
          alt='cute goods!'
          src={'/dtm-' + this.props.i + '.jpg'}
          style={{ WebkitMaskImage: 'url(' + this.props.shape + '.svg)' }}
        />
        <div className={'item-overlay ' + (this.state.isShiny && 'shine')}></div>
      </div>
    );
  }
}

export default DontTouchMe;
