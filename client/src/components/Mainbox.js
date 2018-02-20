import React, { Component } from 'react';
import '../App.css';
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
        // TODO make into switch statement when future sections are added.
        if (this.state.view === 'playgrounds') {
            this.setState({view: 'skateparks'});
        } else if (this.state.view === 'skateparks') {
            this.setState({view: 'playgrounds'});
        }
    }
    render() {
        if (this.state.view === 'skateparks') {
            return (
                <div>
                    <NavButton handleClick={this.handleClick} buttonName={'playgrounds'}/>
                    <div>
                        <Skateparks/>
                    </div>
                </div>
            )
        } else if (this.state.view === 'playgrounds') {
            return (
                <div>
                    <NavButton handleClick={this.handleClick} buttonName={'skateparks'}/>
                    <div>
                        <Playgrounds/>
                    </div>
                </div>
            );
        }
    }
}

export default Mainbox;