import React, { Component } from 'react';
import '../App.css';

class NavButton extends Component {
  render() {
    return (
      <button onClick={this.props.handleClick}>
        {this.props.buttonName}
      </button>
    );
  }
}

export default NavButton;
