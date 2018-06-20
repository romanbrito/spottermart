import React, {Component} from 'react'
import {graphql, createFragmentContainer} from 'react-relay'
import UserAssetListUi from '../ui/UserAssetList'

class UserAssetList extends Component {

  render() {

    return (
      <UserAssetListUi list={this.props.viewer.allAssets.edges}/>
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
    `
  }
)
