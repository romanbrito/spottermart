import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Footer'

const Search = (props) => (
  <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height: '90vh'}}>
    <div className="cf">
      <label className="clip" htmlFor="search">Search</label>
      {/*this input and button need to be in this exact order*/}
      <input
        className="f6 f5-l input-reset fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns ba b--black-10"
        placeholder="What are you looking for..."
        type="search"
        name="filter"
        id="search"
        onKeyPress={e => {
          if (e.key === 'Enter') {
            props.submit(e)
          }
        }}
      />
      <button
        className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
        onClick={e => props.submit(e)}
      >
        Search
      </button>
    </div>
    {/*Display list of assets*/}
    <div>
      {
        props.list.map(list => (
            <main key={list.cursor} className="mw6 center">
              <article>
                <div className="link dt w-100 bb b--black-10 pb2 mt2 blue" href="#0">
                  <div className="dtc w3">
                    <img src={list.node.pictures && list.node.pictures.length > 0 ? list.node.pictures[0].url : ''}
                         alt={list.node.businessName}/>
                  </div>
                  <div className="dtc v-top pl2">
                    <h1 className="f6 f5-ns fw6 lh-title black mv0">{list.node.businessName}</h1>
                    <h2 className="f6 fw4 mt2 mb0 black-60">{list.node.city}</h2>
                    <dl className="mt2 f6">
                      <dt className="clip">Price</dt>
                      <dd className="ml0">{list.node.id}</dd>
                    </dl>
                  </div>
                  <Link to={'/update/' + list.node.id}>
                    <button
                      className="f6 link br1 ph3 pv2 mb2 dib white bg-dark-blue pointer"
                    >Details
                    </button>
                  </Link>
                </div>
              </article>
            </main>
          )
        )
      }
    </div>
    <div>
      <Footer/>
    </div>
  </div>
)

export default Search