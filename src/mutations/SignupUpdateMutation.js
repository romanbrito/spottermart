import {
  commitMutation,
  graphql
} from 'react-relay'

import environment from '../Environment'

const mutation = graphql`
    mutation SignupUpdateMutation($input: UpdateUserInput!){
        updateUser(input: $input){
            user {
                id
            }
        }
    }
`

export default (id, name, callback) => {
  const variables = {
    input: {
      id,
      name,
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