import {
  commitMutation,
  graphql
} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
  mutation CreateMessageMutation($input: CreateMessageInput!) {
      createMessage(input: $input) {
          message {
              id
          }
      }
  }
`

export default (text, messageFromId, messageToId, callback) => {

  const variables = {
    input: {
      text,
      messageFromId,
      messageToId,
      clientMutationId: ""
    }
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err)
    }
  )
}