import React, {Component} from 'react'
import {QueryRenderer, graphql} from 'react-relay'
import environment from '../../Environment'

const SearchPageQuery = graphql`
  query SearchPageQuery($filter: AssetFilter!) {
      viewer {
          allAssets(filter: $filter){
              edges {
                  node {
                      id
                      businessName
                  }
              }   
          }
      }
  }
`
class SearchPage extends Component {

  state = {
    filter: this.props.match.params.filter
  }

  render() {

    return (
      <QueryRenderer
      environment = {environment}
      query = {SearchPageQuery}
      variables = {{
        filter: { OR: [{city_contains:this.state.filter},{businessName_contains:this.state.filter}]},
      }}
      render = {({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
          } else if (props) {
            return <ul>{props.viewer.allAssets.edges.map(edge => <li key={edge.node.id}>{edge.node.businessName}</li>)}</ul>
          }
          return <div>Loading</div>
      }}
      />
    )
  }
}

export default SearchPage