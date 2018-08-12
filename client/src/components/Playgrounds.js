import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import PropTypes from 'prop-types';

class Playgrounds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playgrounds: [],
    };
  }


  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchPlaygroundsList());
  }

  componentWillReceiveProps = (newProps) => {
    // so i can set the state on load?
    this.setState({
      playgrounds: newProps.playgrounds,
    });
  }

  render() {
    return (
      <div>
        <ul>
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
  return {
    playgrounds: state.playgroundsReducer.items,
  };
}

Playgrounds.propTypes = {
  dispatch: PropTypes.func,
};

Playgrounds.defaultProps = {
  dispatch: null,
};
// connect returns a function that calls mapStateToProps
// that returns a value still boxed up in a function that will call the next argument passed,
// if passed the mapping function take the entire state tree line 44 and pass it into the mapstatetoprops function,
// and then pull off what you want
export default connect(mapStateToProps)(Playgrounds);
//                      currying ^^^
