import React, {Component} from 'react'
import {graphql, createPaginationContainer} from 'react-relay'
import SearchUi from '../ui/Search'

class Search extends Component {

  render() {
    return (
      <SearchUi
        list={this.props.viewer.allAssets.edges}
        loadMore={this._loadMore}
        submit={this.props.submit}
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

    // load more data
    this.props.relay.loadMore(2)
  }

}

export default createPaginationContainer(Search,
  {
    viewer: graphql`
        fragment Search_viewer on Viewer {
            allAssets(
                first: $count,
                after: $after,
                filter: $filter,
                orderBy: createdAt_DESC
            ) @connection(key: "Search_allAssets",filters:[]){
                edges {
                    node {
                        id
                        businessName
                        pictures
                        price
                        city
                        coordinates
                        description
                        postedBy {
                            id
                        }
                    }
                }
            }
        }
    `
  },
  {
    direction: 'forward',
    query: graphql`
      query SearchForwardQuery(
          $count: Int!,
          $after: String,
          $filter: AssetFilter!
      ) {
          viewer {
              ...Search_viewer
          }
      }     
    `,
    getConnectionFromProps(props) {
      return props.viewer && props.viewer.allAssets
    },
    getFragmentVariables(previousVariables, totalCount) {
      return {
        ...previousVariables,
        count: totalCount
      }
    },
    getVariables(props, paginationInfo, fragmentVariables) {
      return {
        count: paginationInfo.count,
        after: paginationInfo.cursor,
        filter: fragmentVariables.filter
      }
    }
  })