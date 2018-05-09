import React, { Component } from 'react';
import '../App.css';
import Mainbox from './Mainbox.js';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Mainbox />
      </div>
    );
  }
}

function mapStateToProps(state) {

    return {
        items: state.parksReducer.items,
    }
}

export default connect(mapStateToProps)(App)
