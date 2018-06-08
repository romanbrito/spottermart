import React, {Component} from 'react'
import {GC_USER_ID} from '../constants'
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
    this.setState({userId: ''})
  }
}

export default App;
