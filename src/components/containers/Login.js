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
        <LoginUi onChange={this._onChange}/>
        <h1>My email is {this.state.email}</h1>
        <h1>My password is {this.state.password}</h1>
      </div>
    )

  }

  _onChange = event => {
    const {name, value} = event.target
    name === 'email' && this.setState({email: value})
    name === 'password' && this.setState({password: value})
  }

}

export default Login