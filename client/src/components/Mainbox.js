import React, { Component } from 'react';
import Playgrounds from './Playgrounds';
import Skateparks from './Skateparks';
import NavButton from './NavButton';
import SimpleAppBar from './SimpleAppBar';

class Mainbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'playgrounds',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    // TODO make into switch statement when future sections are added.
    if (this.state.view === 'playgrounds') {
      this.setState({ view: 'skateparks' });
    } else if (this.state.view === 'skateparks') {
      this.setState({ view: 'playgrounds' });
    }
  }

  render() {
    if (this.state.view === 'skateparks') {
      return (
        <div>
          <SimpleAppBar />
          <NavButton handleClick={this.handleClick} buttonName="playgrounds" />
          <div>
            <Skateparks />
          </div>
        </div>
      );
    } if (this.state.view === 'playgrounds') {
      return (
        <div>
          <SimpleAppBar />
          <NavButton handleClick={this.handleClick} buttonName="skateparks" />
          <div>
            <Playgrounds />
          </div>
        </div>
      );
    }
  }
}

export default Mainbox;
