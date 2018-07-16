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

export default (id, name, email, password, callback) => {
  const variables = {
    input: {
      id,
      name,
      email,
      password,
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