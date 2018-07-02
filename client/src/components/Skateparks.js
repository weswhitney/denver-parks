import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import * as actions from '../actions/index';

class Skateparks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skateparks: [],
    };
  }

  componentWillReceiveProps = (newProps) => {
    console.log("Skateparks comp will receive props", newProps)
    this.setState({
        skateparks: newProps.skateparks
    })

}

  componentDidMount() {
    const { dispatch } = this.props;
    // Use redux saga to load data
    // Will call mapStateToProps once data is loaded
    dispatch(actions.fetchSkateParksList());
  }

  render() {
    return (
      <div>
        <Grid item xs={12}>
        <ul>
          {this.state.skateparks.map(item => (
            <li key={item._id}>
              <a href="http://wesleywhitney.com">
                {item.LOCATION}
              </a>
            </li>
          ))}
        </ul>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('---------------');
  console.log('skateparks current state:', state);
  return {
    skateparks: state.parksReducer.items,
  };
}

export default connect(mapStateToProps)(Skateparks);
