import React, { Component } from 'react';
import './App.css';
import Playgrounds from './Playgrounds.js';
import Skateparks from './Skateparks.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Playgrounds />
          <Skateparks />
      </div>
    );
  }
}

export default App;
