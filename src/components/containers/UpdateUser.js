import React, {Component} from 'react'
import {graphql, createFragmentContainer} from 'react-relay'
import UpdateUserMutation from '../../mutations/UpdateUserMutation'
import SignupUi from '../ui/Signup'
// import SignupUserMutation from '../../mutations/SignupUserMutation'

class UpdateUser extends Component {

  state = {
    id: '',
    email: '',
    password: '',
    name: ''
  }

  componentWillMount() {
    this.setState(this.props.user)
  }

  render() {

    return (
      <div>
        <SignupUi
          state={this.state}
          onChange={this._onChange}
          confirm={this._confirm}
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

  _confirm = () => {
    const {id, email, password, name} = this.state

    UpdateUserMutation(id, email, password, name,  () => {
      this.props.clearName()
      this.props.history.push(`/`)
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