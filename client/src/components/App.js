import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import Mainbox from './Mainbox';

class App extends Component {
  render() {
    return (
        <div className="App">
        <CssBaseline />
          <Mainbox />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.parksReducer.items,
  };
}

export default connect(mapStateToProps)(App);
