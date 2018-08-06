import React, {Component} from 'react'
import {QueryRenderer, graphql} from 'react-relay'
import environment from '../../Environment'
import Search from './Search'

const SearchPageQuery = graphql`
    query SearchPageQuery($filter: AssetFilter!, $count: Int!, $after: String) {
        viewer {
            ...Search_viewer
        }
    }
`

class SearchPage extends Component {

  state = {
    filter: this.props.match.params.filter,
  }

  render() {

    return (
      <QueryRenderer
        environment={environment}
        query={SearchPageQuery}
        variables={{
          filter: {
            OR: [
              {address_contains: this.state.filter},
              {businessName_contains: this.state.filter},
              {businessType_contains: this.state.filter},
              {city_contains: this.state.filter},
              {description_contains: this.state.filter},
              {franchiseMarketingFee_contains: this.state.filter},
              {franchiseRoyalties_contains: this.state.filter},
              {franchiseTraining_contains: this.state.filter},
              {franchiseTransferFee_contains: this.state.filter},
              {franchiseYearsRemaining_contains: this.state.filter},
              {fullTimeEmployees_contains: this.state.filter},
              {whySelling_contains: this.state.filter},
              {zipCode_contains: this.state.filter}
            ]
          },
          // how many to load initially
          count: 2
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

  _submit = (e) => {
    // getting input value from keypress enter or button click
    this.setState({
      filter: e.target.tagName === 'INPUT' ? e.target.value : e.target.previousElementSibling.value
    })
    this.props.history.push('/search/')
  }
}

export default SearchPage