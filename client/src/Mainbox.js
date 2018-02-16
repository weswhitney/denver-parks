import React, { Component } from 'react';
import './App.css';
import Playgrounds from './Playgrounds.js';
import Skateparks from'./Skateparks.js';

class Mainbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'playgrounds',

        };
    }
    render() {
        if (this.state.view === 'playgrounds') {
            return (
                <div>
                    <Playgrounds/>
                </div>
            )
        } else {
            return (
                <div>
                    <Skateparks/>
                </div>
            );
        }
    }
}

export default Mainbox;