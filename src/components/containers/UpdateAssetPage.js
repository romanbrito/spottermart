import React, {Component} from 'react'
import {QueryRenderer, graphql} from 'react-relay'
import environment from '../../Environment'
import UpdateAsset from './UpdateAsset'

const UpdateAssetPageQuery = graphql`  
  query UpdateAssetPageQuery ($assetId: ID!) {
      viewer {
          Asset(id: $assetId) {
              ...UpdateAsset_asset
          }
      }
  }
`

class UpdateAssetPage extends Component {

  render() {

    return (
      <QueryRenderer
      environment={environment}
      query={UpdateAssetPageQuery}
      variables={{assetId:this.props.match.params.assetId}}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return <UpdateAsset asset={props.viewer.Asset} history={this.props.history}/>
        }
        return <div>Loading</div>
      }}
      />
    )
  }
}

export default UpdateAssetPage