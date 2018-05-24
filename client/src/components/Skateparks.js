import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class Skateparks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skateparks: [],
        };
    }
    componentDidMount() {
        const { dispatch } = this.props
        // Use redux saga to load data
        // Will call mapStateToProps once data is loaded
        dispatch(actions.fetchSkateParksList())

        // fetch('https://denver-parks-and-skateparks.herokuapp.com/skateparks', {
        //         method: 'GET',
        //         headers: {
        //             Accept: 'application/json',
        //         },
        //     },
        // ).then(response => {
        //     if (response.ok) {
        //         response.json().then(json => {
        //             this.setState({skateparks: json.skateParks});
        //         });
        //     }
        // });

    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.skateparks.map(item=><li key={item._id}><a href="http://wesleywhitney.com">{item.LOCATION}</a></li>)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("skateparks ", state);
    
    return {
        skateparks: state.items,
    }
}

export default connect(mapStateToProps)(Skateparks)
