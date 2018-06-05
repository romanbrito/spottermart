import React, { Component } from 'react'
import {Navigation} from './Navigation'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Main/>
      </div>
    );
  }
}

export default App;
