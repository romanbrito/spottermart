import React, {Component} from 'react'
import MessagesListUi from '../ui/MessagesList'
import DeleteMessageMutation from '../../mutations/DeleteMessageMutation'
import {createFragmentContainer, graphql} from 'react-relay'

class MessagesList extends  Component {

  render() {

    return (
      <div>
        <MessagesListUi
          list={this.props.User.messagesReceived.edges}
          deleteMessage={this._deleteMessage}
        />
      </div>

    )
  }

  _deleteMessage = (messageId) => {
    DeleteMessageMutation(
      messageId,
      () => this.props.history.push('/')
    )

  }

}

export default createFragmentContainer(MessagesList,
  {
    User: graphql`
      fragment MessagesList_User on User {
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
                          id
                      }
                      messageFrom{
                          name
                          id
                      }
                  }
              }
          }
      }
    `
  })