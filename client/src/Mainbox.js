import React, { Component } from 'react';
import './App.css';
import Playgrounds from './Playgrounds.js';
import Skateparks from'./Skateparks.js';
import NavButton from './NavButton.js';

class Mainbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'playgrounds',
        };
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(e) {
        e.preventDefault();
        this.setState({view: 'skateparks'});
    }
    render() {
        if (this.state.view === 'skateparks') {
            return (
                <div>
                    <NavButton handleClick={this.handleClick}/>
                    <div>
                        <Skateparks />
                    </div>
                </div>
            )
        } else if (this.state.view === 'playgrounds') {
            return (
                <div>
                    <NavButton handleClick={this.handleClick}/>
                    <div>
                        <Playgrounds/>
                    </div>
                </div>
            );
        }
    }
}

export default Mainbox;