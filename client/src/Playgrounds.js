import React, { Component } from 'react';
import './App.css';

class Playgrounds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playgrounds: [],
        };
    }
    componentDidMount() {
        fetch('http://denver-parks-and-skateparks.herokuapp.com/playgrounds', {
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
                <ul>
                    {this.state.playgrounds.map(item=><li key={item._id}>{item.LOCATION}</li>)}
                </ul>
            </div>
        );
    }
}

export default Playgrounds;