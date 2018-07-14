import React, {Component} from 'react'
import CreateMessageUi from '../ui/CreateMessage'
import {GC_USER_ID} from '../../constants'
import CreateMessageMutation from '../../mutations/CreateMessageMutation'

class CreateMessage extends Component {

  state = {
    messageText: '',
    messageState: false
  }

  render () {

    return (
      <section>

        <button
          onClick={() => this._showMessage()}
          className="f6 link br1 ph3 pv2 mb2 dib white bg-dark-green pointer"
        >{this.props.title}
        </button>

        {this.state.messageState &&
        <CreateMessageUi onChange={this._onChange} messageText={this.state.messageText} submit={this._submit} closeMessage={this._closeMessage}/>
        }
      </section>
    )
  }

  // functions to show and close create message

  _showMessage = () => {
    this.setState({
      messageState: true
    })
  }

  _closeMessage = () => {
    this.setState({
      messageState: false
    })
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
      this._closeMessage()
        this.setState({
          messageText: ''
        })
    })
  }

}

export default CreateMessage