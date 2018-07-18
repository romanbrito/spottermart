import React, {Component} from 'react'
import SignupUi from '../ui/Signup'
import {GC_AUTH_TOKEN, GC_USER_ID} from "../../constants"
import SignupUserMutation from '../../mutations/SignupUserMutation'

class Signup extends Component {

  state = {
    name: '',
    email: '',
    password: '',
  }

  render () {
    return (
      <div>
        <SignupUi
          onChange={this._onChange}
          confirm={this._confirm}
          state={this.state}/>
      </div>
    )

  }

  _onChange = event => {
    const {name, value} = event.target
    name === 'email' && this.setState({email: value})
    name === 'password' && this.setState({password: value})
    name === 'name' && this.setState({name: value})
  }

  _confirm = () => {
    const {email, password, name} = this.state

    SignupUserMutation(email, password, name, (id, token) => {

        this._saveUserData(id, token)
        this.props.history.push(`/`)

    })
  }

  _saveUserData = (id, token) => {
    localStorage.setItem(GC_USER_ID, id)
    localStorage.setItem(GC_AUTH_TOKEN, token)
  }

}

export default Signup