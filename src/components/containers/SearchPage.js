import React, {Component} from 'react'
import {QueryRenderer, graphql} from 'react-relay'
import environment from '../../Environment'
import Search from './Search'

const SearchPageQuery = graphql`
    query SearchPageQuery($filter: AssetFilter!) {
        viewer {
            ...Search_viewer
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
        environment={environment}
        query={SearchPageQuery}
        variables={{
          filter: {
            OR: [
              {city_contains: this.state.filter},
              {businessName_contains: this.state.filter}
            ]
          },
        }}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <Search viewer={props.viewer} submit={this._submit}/>
          }
          return <div>Loading</div>
        }}
      />
    )
  }

  _submit = (filter) => {
    this.setState({
      filter
    })
    this.props.history.push('/search/')
  }

}

export default SearchPage