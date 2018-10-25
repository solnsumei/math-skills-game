import React, { Component } from 'react';

import Game from './Game';

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @returns {Object} jsx
   */
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default App;
