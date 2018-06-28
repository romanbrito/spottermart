import React, {Component} from 'react'
import {GC_AUTH_TOKEN, GC_USER_ID} from '../constants'
import Header from './Header'
import Main from './Main'

class App extends Component {
  state = {
    userId: ''
  }

  componentWillMount() {
    this._getId()
  }

  render() {
    return (
      <div className="App">
        <Header userId={this.state.userId} removeId={this._removeId}/>
        <Main getId={this._getId}/>
      </div>
    );
  }

  _getId = () => {
    this.setState({
      userId: localStorage.getItem(GC_USER_ID)
    })
  }

  _removeId = () => {
    localStorage.removeItem(GC_USER_ID)
    localStorage.removeItem(GC_AUTH_TOKEN)
    this.setState({userId: ''})
  }
}

export default App;
