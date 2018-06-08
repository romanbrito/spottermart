import React, {Component} from 'react'
import AuthenticateUserMutation from '../../mutations/AuthenticateUserMutation'
import {GC_USER_ID, GC_AUTH_TOKEN} from '../../constants'
import LoginUi from '../ui/Login'

class Login extends Component{

  state = {
    email: '',
    password: '',
  }

  render () {
    return (
        <LoginUi onChange={this._onChange} confirm={this._confirm}/>
    )

  }

  _onChange = event => {
    const {name, value} = event.target
    name === 'email' && this.setState({email: value})
    name === 'password' && this.setState({password: value})
  }

  _confirm = () => {
    const {email, password} = this.state
    AuthenticateUserMutation(email, password, (id, token) => {
      this._saveUserData(id, token)
      this.props.getId()
      this.props.history.push(`/`)
    })
  }

  _saveUserData = (id, token) => {
    localStorage.setItem(GC_USER_ID, id)
    localStorage.setItem(GC_AUTH_TOKEN, token)
  }

}

export default Login