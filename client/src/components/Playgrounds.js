import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

import '../App.css';

class Playgrounds extends Component {
  constructor(props) {
    super(props);
    console.log('playground props ', props);
    this.state = {
      playgrounds: this.props.playgrounds || [], // need to get the state updated from empty array to the array of items.
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    console.log('this.props: ', this.props);
    console.log('action.fetchPlaygrounds() ', actions.fetchPlaygroundsList());
    dispatch(actions.fetchPlaygroundsList());
  }

  render() {
    return (
      <div>
            <ul>
                {console.log('this.state in render ', this.state)}
                {console.log('this.props in render ', this.props.playgrounds)}
                {console.log('this.props in render ', typeof this.props.playgrounds)}
                {this.state.playgrounds.map(item => (
<li key={item._id}>
{item.LOCATION}
</li>
))}
              </ul>
          </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('---------------');
  console.log('playground current state:', state);
  console.log('state.playgroundsReducer.items :', state.playgroundsReducer.items);
  return {
    playgrounds: state.playgroundsReducer.items,
  };
}

export default connect(mapStateToProps)(Playgrounds); // connect returns a function that calls mapStateToProps that returns a value still boxed up in a function that will call the next argument passed, if passed the mapping function take the entire state tree line 44 and pass it into the mapstatetoprops function, and then pull off what you want
//                      currying ^^^
