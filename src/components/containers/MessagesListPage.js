import React, {Component} from 'react'
import {QueryRenderer, graphql} from 'react-relay'
import environment from '../../Environment'
import {GC_USER_ID} from '../../constants'

const MessagesListPageQuery = graphql`
  query MessagesListPageQuery($userId: ID!){
      viewer {
          User (id: $userId){
              messagesReceived(
                  last: 100,
                  orderBy: id_ASC
              )@connection(key: "MessagesList_messagesReceived") {
                  edges {
                      node {
                          id
                          text
                          messageTo {
                              name
                          }
                      }
                  }
              }
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
          return <div>messgesList {console.log(props)}</div>
        }
        return <div>Loading</div>
      }}
      />
    )
  }
}

export default MessagesListPage