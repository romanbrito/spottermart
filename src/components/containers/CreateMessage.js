import React, {Component} from 'react'
import CreateMessageUi from '../ui/CreateMessage'
import {GC_USER_ID} from '../../constants'
import CreateMessageMutation from '../../mutations/CreateMessageMutation'

class CreateMessage extends Component {

  state = {
    messageText: ''
  }

  render () {

    return (
      <section>
        {this.props.messageState &&
        <CreateMessageUi onChange={this._onChange} messageText={this.state.messageText} submit={this._submit} closeMessage={this.props.closeMessage}/>
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
    const postedBy = this.props.postedBy
    const {messageText} = this.state
    CreateMessageMutation(messageText,fromId,postedBy,
      () => {
      this.props.closeMessage()
        this.setState({
          messageText: ''
        })
    })
  }


}

export default CreateMessage