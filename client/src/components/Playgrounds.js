import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

class Playgrounds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playgrounds: [],
        };
    }
    componentDidMount() {
        const { dispatch } = this.props

        dispatch(actions.fetchPlaygroundsList())
        // fetch('https://denver-parks-and-skateparks.herokuapp.com/playgrounds', {
        //         method: 'GET',
        //         headers: {
        //             Accept: 'application/json',
        //         },
        //     },
        // ).then(response => {
        //     if (response.ok) {
        //         response.json().then(json => {
        //             this.setState({playgrounds: json.playgrounds});
        //         });
        //     }
        // });
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

function mapStateToProps(state) {
    return {
        playgrounds: state.items,
    }
}

export default connect(mapStateToProps)(Playgrounds)