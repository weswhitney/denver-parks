import React, { Component } from 'react';
import './App.css';

class Playgrounds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
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
                    console.log(json);
                });
            }
        });

    }
    render() {
        console.log("name " + this.state.name + " items: " + this.state.items);
        return (
            <div>
                <ul>
                    {this.state.items.map(item=><li key={item.id}>{item.body}</li>)}
                </ul>
            </div>
        );
    }
}

export default Playgrounds;