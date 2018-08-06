import React, {Component} from 'react'
import {graphql, createFragmentContainer} from 'react-relay'
import UserAssetListUi from '../ui/UserAssetList'
import DeleteAssetMutation from '../../mutations/DeleteAssetMutation'

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
    DeleteAssetMutation(
      assetId,
      () => {
        // after delete keep showing list of assets
        this.props.relay.refetchConnection(this.props.viewer.allAssets.edges.length-1)
      }
    )
  }
}

export default createFragmentContainer(UserAssetList,
  {
    viewer: graphql`
        fragment UserAssetList_viewer on Viewer {
            allAssets(
                filter: $filter,
                last: 100,
                orderBy: createdAt_DESC
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
)
