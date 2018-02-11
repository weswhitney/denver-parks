import React, { Component } from 'react';
import './App.css';
import Playgrounds from './Playgrounds.js';
import Skateparks from'./Skateparks.js';

class Mainbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggledOn: 'playgrounds',
        };
    }
    render() {
        return (
            <div>
                <Playgrounds />
                <Skateparks/>
            </div>
        );
    }
}

export default Mainbox;