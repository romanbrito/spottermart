import React, {Component} from 'react'
import {graphql, createRefetchContainer} from 'react-relay'
import UserAssetListUi from '../ui/UserAssetList'
import DeleteAssetMutation from '../../mutations/DeleteAssetMutation'
import {GC_USER_ID} from '../../constants'

class UserAssetList extends Component {

  render() {

    return (
      <UserAssetListUi
        list={this.props.viewer.allAssets.edges}
        delete={this._deleteAsset}
      />
    )
  }

  _deleteAsset = (assetId) => {
    const userId = localStorage.getItem(GC_USER_ID)
    DeleteAssetMutation(
      assetId,
      () => {
        // after delete keep showing list of assets
        this.props.relay.refetch(
          {filter: {postedBy: {id: userId}}}
        )
      }
    )
  }
}

export default createRefetchContainer(UserAssetList,
  {
    viewer: graphql`
        fragment UserAssetList_viewer on Viewer
            @argumentDefinitions(
            filter:{type: AssetFilter},
            last: {type: "Int"},
            orderBy: {type: AssetOrderBy}
        )
        {
            allAssets(
                filter: $filter,
                last: $last,
                orderBy: $orderBy
            ) @connection(key: "UserAssetList_allAssets",filters:[]) {
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
                pageInfo {
                    hasNextPage
                    endCursor
                }
            }
        }
    `,
  },
  graphql`
      # Refetch query to be fetched upon calling \`refetch\`.
      # Notice that we re-use our fragment and the shape of this query matches our fragment spec.
    query UserAssetListRefetchQuery($filter: AssetFilter,$last: Int, $orderBy: AssetOrderBy){
        viewer {
            ...UserAssetList_viewer @arguments(filter: $filter, last: $last, orderBy: $orderBy)
        }
    }
  `
)
