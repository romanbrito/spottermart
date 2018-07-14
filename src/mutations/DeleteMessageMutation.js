import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
  mutation DeleteMessageMutation($input: DeleteMessageInput!) {
      deleteMessage(input: $input) {
          message {
              id
          }
      }
  }
`

export default (id, callback) => {
  const variables = {
    input: {
      id,
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