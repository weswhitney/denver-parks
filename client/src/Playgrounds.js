import React, { Component } from 'react';
import './App.css';
import NavButton from './NavButton.js';

class Playgrounds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playgrounds: [],
        };
    }
    componentDidMount() {
        fetch('https://denver-parks-and-skateparks.herokuapp.com/playgrounds', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            },
        ).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    this.setState({playgrounds: json.playgrounds});
                });
            }
        });
    }
    render() {
        return (
            <div>
                <NavButton />
                <ul>
                    {this.state.playgrounds.map(item=><li key={item._id}>{item.LOCATION}</li>)}
                </ul>
            </div>
        );
    }
}

export default Playgrounds;