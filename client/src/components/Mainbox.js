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
    const { view } = this.state;
    e.preventDefault();
    // TODO make into switch statement when future sections are added.
    if (view === 'playgrounds') {
      this.setState({ view: 'skateparks' });
    } else if (view === 'skateparks') {
      this.setState({ view: 'playgrounds' });
    }
  }

  render() {
    const { view } = this.state;
    if (view === 'skateparks') {
      return (
        <div>
          <SimpleAppBar />
          <NavButton handleClick={this.handleClick} buttonName="playgrounds" />
          <div>
            <Skateparks />
          </div>
        </div>
      );
    } if (view === 'playgrounds') {
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
