import React, {Component} from 'react'
import {QueryRenderer, graphql} from 'react-relay'
import environment from '../../Environment'
import {GC_USER_ID} from '../../constants'
import UpdateUser from './UpdateUser'

const UpdateUserQuery = graphql`
  query UpdateUserPageQuery ($userId: ID!) {
      viewer {
          User(id: $userId) {
              ...UpdateUser_user
          }
      }
  }
`

class UpdateUserPage extends Component {

  render() {

    return (
      <QueryRenderer
      environment={environment}
      query={UpdateUserQuery}
      variables={{userId: localStorage.getItem(GC_USER_ID)}}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return <UpdateUser user={props.viewer.User}/>
        }
        return <div>Loading</div>
      }}
      />
    )
  }
}

export default UpdateUserPage