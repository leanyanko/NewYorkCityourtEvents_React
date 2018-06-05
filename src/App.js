import React, { Component } from 'react';
import './App.css';

import Constructions from './components/Constructions';
import Login from './components/Login';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    };
  }

  setAuthState = (authState) => {
    console.log('this.setState', this.setState);
    this.setState({ authenticated: authState });
  }


  render() {

    return (
      <div className="App">
          <Login updateState={this.setAuthState} />
          { this.state.authenticated ? <Constructions /> : <span>In order to use this service you have to login using Twitter.</span>}
      </div>
    );
  }
}

export default App;
