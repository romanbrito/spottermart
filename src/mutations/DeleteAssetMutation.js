import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation DeleteAssetMutation($input: DeleteAssetInput!) {
        deleteAsset(input: $input) {
            asset {
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