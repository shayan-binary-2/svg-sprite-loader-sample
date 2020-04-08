import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { NormalIcon } from './icon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    	<div>
    		<NormalIcon />
    	</div>
    );
  }
}

export default hot(App);
