import React, {Component} from 'react'
import {QueryRenderer, graphql} from 'react-relay'
import environment from '../../Environment'
import {GC_USER_ID} from '../../constants'
import MessagesList from './MessagesList'

const MessagesListPageQuery = graphql`
  query MessagesListPageQuery($userId: ID!){
      viewer {
          User (id: $userId){
              ...MessagesList_User
          }
      }
  }
`

class MessagesListPage extends Component {

  render() {
    const userId = localStorage.getItem(GC_USER_ID)

    return (
      <QueryRenderer
      environment={environment}
      query={MessagesListPageQuery}
      variables={{userId}}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return <MessagesList User={props.viewer.User}/>
        }
        return <div>Loading</div>
      }}
      />
    )
  }
}

export default MessagesListPage