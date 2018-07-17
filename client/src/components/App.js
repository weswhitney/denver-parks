import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Mainbox from './Mainbox';
import SimpleAppBar from './SimpleAppBar';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <CssBaseline />
        <div className="App">
            <SimpleAppBar title="tester"/>
          <Mainbox />
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.parksReducer.items,
  };
}

export default connect(mapStateToProps)(App);
