import React, { Component } from 'react';
import './App.css';

class Skateparks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skateparks: [],
        };
    }
    componentDidMount() {
        fetch('http://localhost:3001/skateparks', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            },
        ).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    this.setState({skateparks: json.skateParks});
                });
            }
        });

    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.skateparks.map(item=><li key={item._id}>{item.LOCATION}</li>)}
                </ul>
            </div>
        );
    }
}

export default Skateparks;