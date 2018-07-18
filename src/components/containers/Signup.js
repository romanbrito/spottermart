import React, {Component} from 'react'
import SignupUi from '../ui/Signup'
import {GC_AUTH_TOKEN, GC_USER_ID} from "../../constants"
import SignupUserMutation from '../../mutations/SignupUserMutation'

class Signup extends Component {

  state = {
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  }

  render() {
    return (
      <div>
        <SignupUi
          onChange={this._onChange}
          confirm={this._confirm}
          state={this.state}/>
      </div>
    )

  }

// functions for change of input
  _onChange = event => {
    const {name, value} = event.target
    this._newState(name, value)
  }
  _newState = (element, newElement) => {
    const newState = Object.keys(this.state).reduce((prev, curr) => {
      if (curr === element) prev[curr] = newElement
      else prev[curr] = this.state[curr]
      return prev
    }, {})
    this.setState(newState)
  }

  _confirm = () => {
    const {email, password, confirmPassword, name} = this.state

    if (password === confirmPassword) {
      SignupUserMutation(email, password, name, (id, token) => {

        this._saveUserData(id, token)
        this.props.getId()
        this.props.history.push(`/`)

      })
    } else {
      console.log('passwords are not equal')
    }
  }

  _saveUserData = (id, token) => {
    localStorage.setItem(GC_USER_ID, id)
    localStorage.setItem(GC_AUTH_TOKEN, token)
  }

}

export default Signup