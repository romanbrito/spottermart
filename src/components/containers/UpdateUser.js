import React, {Component} from 'react'
import {graphql, createFragmentContainer} from 'react-relay'
import UpdateUserMutation from '../../mutations/UpdateUserMutation'
import LoginUi from '../ui/Login'

class UpdateUser extends Component {

  state = {
    name: '',
    email:'',
    password: ''
  }

  componentWillMount() {
    this.setState(this.props.user)
  }

  render() {

    return (
      <div>
        {console.log(this.props)}
        <LoginUi
          state={this.state}
          onChange={this._onChange}
        />
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

}

export default createFragmentContainer(UpdateUser, graphql`
  fragment UpdateUser_user on User {
      name
      email
      password
  }
`)