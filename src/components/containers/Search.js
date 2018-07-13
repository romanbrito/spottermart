import React, {Component} from 'react'
import {graphql, createFragmentContainer} from 'react-relay'
import SearchUi from '../ui/Search'

class Search extends Component {

  render() {
    return (
      <SearchUi
        list={this.props.viewer.allAssets.edges}
        submit={this.props.submit}
        showMessage={this.props.showMessage}
        messageState={this.props.messageState}
        postedBy={this.props.postedBy}
      />
    )
  }
}

export default createFragmentContainer(Search,
  {
    viewer: graphql`
        fragment Search_viewer on Viewer {
            allAssets(
                filter: $filter,
                last: 100,
                orderBy: createdAt_DESC
            ) @connection(key: "Search_allAssets",filters:[]){
                edges {
                    node {
                        id
                        businessName
                        pictures
                        price
                        city
                        description
                        postedBy {
                            id
                        }
                    }
                }
            }
        }
    `
  })