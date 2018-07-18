import {
  commitMutation,
  graphql
} from 'react-relay'

import environment from '../Environment'

const mutation = graphql`
  mutation UpdateUserMutation($id: ID!, $email: String!, $password: String!, $name: String!){
      upgradeUser(id: $id, email: $email, password: $password, name: $name){
          id          
      }
  }
`

export default (id, email, password, name, callback) => {
  const variables = {
      id,
      email,
      password,
      name,
      clientMutationId: ""
  }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: response => {
        const id = response.upgradeUser.id
        callback(id)
      },
      onError: err => console.error(err)
    }
  )

}