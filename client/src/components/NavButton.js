import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';


class NavButton extends Component {
  render() {
    return (
      <Button onClick={this.props.handleClick} variant="contained" color="primary">
        {this.props.buttonName}
      </Button>
    );
  }
}

export default NavButton;
