import React, {Component} from 'react'
import {graphql, createPaginationContainer} from 'react-relay'
import UserAssetListUi from '../ui/UserAssetList'
import DeleteAssetMutation from '../../mutations/DeleteAssetMutation'

class UserAssetList extends Component {

  render() {

    return (
      <UserAssetListUi
        list={this.props.viewer.allAssets.edges}
        loadMore={this._loadMore}
        delete={this._deleteAsset}
      />
    )
  }

  _loadMore = () => {
    if (!this.props.relay.hasMore()) {
      console.log(`Nothing more to load`)
      return
    } else if (this.props.relay.isLoading()) {
      console.log(`Request is already pending`)
      return
    }

    this.props.relay.loadMore(1)
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

export default createPaginationContainer(UserAssetList,
  {
    viewer: graphql`
        fragment UserAssetList_viewer on Viewer {
            allAssets(
                first: $count,
                after: $after,
                filter: $filter,
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
  {
    direction: 'forward',
    query: graphql`
        query UserAssetListForwardQuery(
        $count: Int!,
        $after: String,
        $filter: AssetFilter!
        ) {
            viewer {
                ...UserAssetList_viewer
            }
        }
    `,
    getConnectionFromProps(props) {
      return props.viewer && props.viewer.allAssets
    },
    getFragmentVariables(previousVariables, totalCount) {
      return {
        ...previousVariables,
        count: totalCount,
      }
    },
    getVariables(props, paginationInfo, fragmentVariables) {
      return {
        count: paginationInfo.count,
        after: paginationInfo.cursor,
        filter: fragmentVariables.filter,
      }
    },
  }
)
