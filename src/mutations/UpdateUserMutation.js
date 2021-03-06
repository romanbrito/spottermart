import {
  commitMutation,
  graphql
} from 'react-relay'

import environment from '../Environment'

const mutation = graphql`
  mutation UpdateUserMutation($input: UpdateUserInput!){
      updateUser(input: $input){
          user {
              id
          }
      }
  }
`

export default (id, email, name, callback) => {
  const variables = {
    input: {
      id,
      name,
      email,
      clientMutationId: ""
    }
  }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: response => {
        const id = response.updateUser.user.id
        callback(id)
      },
      onError: err => console.error(err)
    }
  )

}