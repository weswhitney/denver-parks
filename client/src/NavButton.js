import React, { Component } from 'react';
import './App.css';

class NavButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <button onClick={this.props.handleClick}>Skateparks</button>;
    }
}

export default NavButton;