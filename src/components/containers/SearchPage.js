import React, {Component} from 'react'
import {QueryRenderer, graphql} from 'react-relay'
import environment from '../../Environment'
import {GC_USER_ID} from "../../constants"

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
    filter: ''
  }

  render() {

    console.log(this.props)

    return (
      <QueryRenderer
      environment = {environment}
      query = {SearchPageQuery}
      variables = {{
        filter: {address_contains:this.props.match.params.filter},
      }}
      render = {({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
          } else if (props) {
            return <div>props {console.log(props)} </div>
          }
          return <div>Loading</div>
      }}
      />
    )
  }
}

export default SearchPage