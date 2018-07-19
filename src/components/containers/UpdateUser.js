import React, {Component} from 'react'
import {graphql, createFragmentContainer} from 'react-relay'
import isEmail from 'validator/lib/isEmail'
import UpdateUserMutation from '../../mutations/UpdateUserMutation'
import UpdatePasswordMutation from '../../mutations/UpdatePasswordMutation'
import UpdateUserUi from '../ui/UpdateUser'

class UpdateUser extends Component {

  state = {
    id: '',
    email: '',
    password: '',
    confirmPassword: '',
    oldPassword: '',
    name: '',
    showPassword: false
  }

  componentWillMount() {
    const {id, name, email} = this.props.user
    this.setState({
      id,
      name,
      email
    })
  }

  render() {

    return (
      <div>
        <UpdateUserUi
          state={this.state}
          onChange={this._onChange}
          confirm={this._confirm}
          showPassword={this._showPassword}
          updatePassword={this._updatePassword}
        />
      </div>
    )
  }

  _showPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    })
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
    const {id, email, name} = this.state

    if (isEmail(email)) {
      UpdateUserMutation(id, email, name, () => {
        this.props.clearName()
        this.props.history.push(`/`)
      })
    } else {
      console.log('invalid email')
    }

  }

  _updatePassword = () => {
    const {id, password} = this.state
    UpdatePasswordMutation(id, password, () => {
      this.setState({
        showPassword: false
      })
    })
  }

}

export default createFragmentContainer(UpdateUser, graphql`
    fragment UpdateUser_user on User {
        id
        name
        email
        password
    }
`)