import React, {Component} from 'react'
import {GC_USER_ID} from '../constants'
import Header from './Header'
import Main from './Main'

class App extends Component {
  state = {
    userId: ''
  }

  componentWillMount() {
    this.setState({
      userId: localStorage.getItem(GC_USER_ID)
    })
  }

  render() {
    return (
      <div className="App">
        <Header userId={this.state.userId}/>
        <Main/>
      </div>
    );
  }
}

export default App;
