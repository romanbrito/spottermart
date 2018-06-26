import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Search extends Component {
  state = {
    search: ''
  }

  render() {

    return (
      <div className="pa4-l">
        <form className="bg-black-05 mw7 center pa4 br2-ns ba b--black-10">
          <fieldset className="cf bn ma0 pa0">
            <legend className="pa0 f5 f4-ns mb3 black-80">Find it here</legend>
            <div className="cf">
              <label className="clip" htmlFor="search">Search</label>
              <input
                className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                placeholder="What are you looking for..."
                type="search"
                name="search"
                id="search"
                onChange={(e) => this.setState({search:e.target.value})}
              />
              <Link to={this.state.search ? '/search/' + this.state.search: '/search/all'}>
                <button
                  className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                >
                  Search
                </button>
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Search