import React, { Component } from 'react';
import './App.css';
import DontTouchMe from './DontTouchMe';

import $ from 'jquery';

class App extends Component {
  componentDidMount() {
    $(function() {
      var body = $('#starshine'),
        template = $('.template.shine'),
        stars = 200,
        sparkle = 20;

      var size = 'small';
      var createStar = function() {
        template
          .clone()
          .removeAttr('id')
          .css({
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            webkitAnimationDelay: Math.random() * sparkle + 's',
            mozAnimationDelay: Math.random() * sparkle + 's'
          })
          .addClass(size)
          .appendTo(body);
      };

      for (var i = 0; i < stars; i++) {
        if (i % 2 === 0) {
          size = 'small';
        } else if (i % 3 === 0) {
          size = 'medium';
        } else {
          size = 'large';
        }

        createStar();
      }
    });
  }

  render() {
    return (
      <div className='App'>
        <div id='starshine'>
          <div className='template shine'></div>
        </div>
        <DontTouchMe />
      </div>
    );
  }
}

export default App;

