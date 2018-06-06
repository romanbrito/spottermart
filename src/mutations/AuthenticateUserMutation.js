import {
  commitMutation,
  graphql
} from 'react-relay'

import environment from '../Environment'

const mutation = graphql`
  mutation AuthenticateUserMutation($email: String!,$password: String!) {
    authenticateUser(email: $email, password: $password){
      token
      id
      }  
    }
`

export default (email, password, callback) => {
  const variables = {
    email,
    password
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: response => {
        const id = response.authenticateUser.id
        const token = response.authenticateUser.token
        callback(id, token)
      },
      onError: err => console.error(err),
    },
  )
}