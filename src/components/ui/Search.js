import React, {Component} from 'react'

class Search extends Component {
  state = {
    search: ''
  }

  render() {
    return (
      <div>
        <div className="cf">
          <label className="clip" htmlFor="search">Search</label>
          <input
            className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
            placeholder="What are you looking for..."
            type="search"
            name="filter"
            id="search"
            onChange={(e) => this.setState({search: e.target.value})}
          />
          <button
            className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
            onClick={() => this.props.submit(this.state.search)}
          >
            Search
          </button>

        </div>
        <ul>{this.props.list.map(list =>
          <li
            key={list.cursor}>
            {list.node.businessName}
          </li>)}
        </ul>
      </div>
    )
  }

}

export default Search