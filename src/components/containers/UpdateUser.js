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
        />
      </div>
    )
  }
}

export default createFragmentContainer(UpdateUser, graphql`
  fragment UpdateUser_user on User {
      name
      email
      password
  }
`)