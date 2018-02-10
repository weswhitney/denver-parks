import React, { Component } from 'react';
import './App.css';

class Skateparks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skateparks: [],
            name: 'wes'
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
                    console.log(json.skateParks);
                    this.setState({skateparks: json.skateParks});
                });
            }
        });

    }
    render() {
        console.log("name " + this.state.name + " skateparks : " + this.state.skateparks);
        return (
            <div>
                <ul>
                    {this.state.skateparks.map(item=><li key={item.id}>{item.LOCATION}</li>)}
                </ul>
            </div>
        );
    }
}

export default Skateparks;