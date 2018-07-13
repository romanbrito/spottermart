import React, {Component} from 'react'
import CreateMessageUi from '../ui/CreateMessage'
import {GC_USER_ID} from '../../constants'

class CreateMessage extends Component {

  state = {
    messageText: ''
  }

  render () {

    return (
      <section>
        {this.props.messageState &&
        <CreateMessageUi onChange={this._onChange} messageText={this.state.messageText} submit={this._submit}/>
        }
      </section>
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
    const fromId = localStorage.getItem(GC_USER_ID)
    console.log(this.state.messageText)
    console.log(this.props.postedBy)
  }


}

export default CreateMessage