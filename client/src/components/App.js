import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import Mainbox from './Mainbox';


function App() {
  return (
    <MuiThemeProvider>
      <CssBaseline />
      <Mainbox />
    </MuiThemeProvider>
  );
}

function mapStateToProps(state) {
  return {
    items: state.parksReducer.items,
  };
}

export default connect(mapStateToProps)(App);
