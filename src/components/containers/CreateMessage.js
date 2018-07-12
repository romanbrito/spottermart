import React, {Component} from 'react'
import CreateMessageUi from '../ui/CreateMessage'

class CreateMessage extends Component {

  state = {
    messageText: ''
  }

  render () {

    return (
      <CreateMessageUi onChange={this._onChange} messageText={this.state.messageText} submit={this._submit}/>
    )
  }

  // functions for change of input
  _onChange = event => {
    const {name, value} = event.target
    this._newState(name,value)
  }

  _newState = (element, newElement) => {
    const newState = Object.keys(this.state).reduce((prev, curr) => {
      if (curr === element) prev[curr] = newElement
      else prev[curr] = this.state[curr]
      return prev
    },  {})
    this.setState(newState)
  }

  _submit = () => {
    console.log(this.state.messageText)
  }


}

export default CreateMessage