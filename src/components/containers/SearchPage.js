import React, {Component} from 'react'


class Search extends Component {

  state = {
    filter: ''
  }

  render() {

    console.log(this.props)

    return (
      <h1>Search</h1>
    )
  }
}

export default Search