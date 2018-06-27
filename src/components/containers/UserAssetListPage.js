import React, {Component} from 'react'
import {QueryRenderer, graphql} from 'react-relay'
import environment from '../../Environment'
import {GC_USER_ID} from "../../constants"
import UserAssetList from './UserAssetList'

const UserAssetListPageQuery = graphql`
query UserAssetListPageQuery($filter: AssetFilter!, $count: Int!, $after: String) {
        viewer {
            ...UserAssetList_viewer
        }
}
`

class UserAssetListPage extends Component{

  render() {
    const userId = localStorage.getItem(GC_USER_ID)

    return (
      <QueryRenderer
      environment = {environment}
      query = {UserAssetListPageQuery}
      variables = {{
        filter: {postedBy: {id: userId}},
        count: 1,
      }}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return <UserAssetList viewer={props.viewer} history={this.props.history}/>
        }
        return <div>Loading</div>
      }}
      />
    )
  }

}

export default UserAssetListPage