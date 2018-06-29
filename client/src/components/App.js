import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Mainbox from './Mainbox';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
        <CssBaseline>
          <Mainbox />
        </CssBaseline>
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
