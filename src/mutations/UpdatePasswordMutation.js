import {
  commitMutation,
  graphql
} from 'react-relay'

import environment from '../Environment'

const mutation = graphql`
    mutation UpdatePasswordMutation($id: ID!, $password: String!){
        updatePassword(id: $id, password: $password){
            id
        }
    }
`

export default (id, password, callback) => {
  const variables = {
      id,
      password,
      clientMutationId: ""
  }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: response => {
        const id = response.updatePassword.id
        callback(id)
      },
      onError: err => console.error(err)
    }
  )
}