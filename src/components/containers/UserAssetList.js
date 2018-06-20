import React, {Component} from 'react'
import {QueryRenderer, graphql} from 'react-relay'
import environment from '../../Environment'
import {GC_USER_ID} from "../../constants"
import UserAssetListUi from '../ui/UserAssetList'

const UserAssetListQuery = graphql`
query UserAssetListQuery($filter: AssetFilter!) {
    viewer {
        allAssets(
            filter: $filter,
            last: 100,
            orderBy: createdAt_DESC
        ) @connection(key: "UserAssetList_allAssets") {
            edges {
                node {
                    id
                    businessName
                    city
                    state
                    zipCode
                    pictures
                }
            }
        }
    }
}
`

class UserAssetList extends Component{

  render() {
    const userId = localStorage.getItem(GC_USER_ID)

    return (
      <QueryRenderer
      environment = {environment}
      query = {UserAssetListQuery}
      variables = {{
        filter: {postedBy: {id: userId}}
      }}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return <UserAssetListUi list={props.viewer.allAssets.edges}/>
        }
        return <div>Loading</div>
      }}
      />
    )
  }

}

export default UserAssetList