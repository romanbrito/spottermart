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
            return <Search viewer={props.viewer} onChange={this._onChange}/>
          }
          return <div>Loading</div>
        }}
      />
    )
  }

  // functions for change of input
  _onChange = event => {
    const {name, value} = event.target
    this._newState(name,value)
  }

  _newState = (element, newElement) => {
    const newState = Object.keys(this.state).reduce((prev, curr) => {
      if (curr === element) prev[curr] = newElement
      else prev[curr] = this.state[curr]
      return prev
    },  {})
    this.setState(newState)
  }
}

export default SearchPage