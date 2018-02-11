import React, { Component } from 'react';
import './App.css';

class Playgrounds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playgrounds: [],
            name: 'wes'
        };
    }
    componentDidMount() {
        fetch('http://localhost:3001/playgrounds', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            },
        ).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    console.log(json.playgrounds);
                    this.setState({playgrounds: json.playgrounds});
                });
            }
        });
    }
    render() {
        console.log("name " + this.state.name + " playgrounds : " + this.state.playgrounds);
        return (
            <div>
                <ul>
                    {this.state.playgrounds.map(item=><li key={item.id}>{item.LOCATION}</li>)}
                </ul>
            </div>
        );
    }
}

export default Playgrounds;