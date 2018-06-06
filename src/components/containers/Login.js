import React, {Component} from 'react'
import LoginUi from '../ui/Login'

class Login extends Component{

  state = {
    email: '',
    password: '',
  }

  render () {
    return (
      <div>
        <LoginUi onChange={this._onChange} confirm={this._confirm}/>
      </div>
    )

  }

  _onChange = event => {
    const {name, value} = event.target
    name === 'email' && this.setState({email: value})
    name === 'password' && this.setState({password: value})
  }

  _confirm = () => {
    // mutation
    console.log('mutation')
  }

}

export default Login