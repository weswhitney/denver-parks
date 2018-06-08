import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/index'

import '../App.css';

class Playgrounds extends Component {
    constructor(props) {
        super(props);
        console.log('playground props ', props);
        this.state = {
            playgrounds: [],
        };
    }
    componentDidMount() {
        const { dispatch } = this.props
console.log('this.props: ', this.props)
console.log('action.fetchPlaygrounds() ', actions.fetchPlaygroundsList())
        dispatch(actions.fetchPlaygroundsList())
    }
    render() {
        return (
            <div>
                <ul>
                    {console.log('this.state in render ', this.state)}
                    {this.state.playgrounds.map(item=><li key={item._id}>{item.LOCATION}</li>)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("---------------");
    console.log("playground current state:", state);
    return {
        playgrounds: state.items,
    }
}
                    
export default connect(mapStateToProps)(Playgrounds) // connect returns a function that calls mapStateToProps that returns a value still boxed up in a function that will call the next argument passed, if passed the mapping function take the entire state tree line 44 and pass it into the mapstatetoprops function, and then pull off what you want
//                      currying ^^^