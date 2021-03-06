import React from 'react'
import {Link} from 'react-router-dom'
import {GC_USER_ID} from './../../constants'
import Footer from '../Footer'
import SlideShow from '../SlideShow'
import CreateMessage from '../containers/CreateMessage'
import Map from './Map'
import {
  Main,
  Figure,
  SearchInput,
  SearchButton,
} from './StyledSearch'

const Search = (props) => (
  <Main>
    <Figure>
      {/*this input and button need to be in this exact order*/}
      <SearchInput
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
      <SearchButton
        onClick={e => props.submit(e)}
      >
        Search
      </SearchButton>

    </Figure>
    {/*Display list of assets*/}
    <div>
      {
        props.list.map(list => (
            <main key={list.cursor} className="mw6 center">

              <article>
                <div className="">
                  <SlideShow images={list.node.pictures}/>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gridTemplateRows: '1fr 1fr 1fr'}}>
                  <h1 className="f6 f5-ns fw6 lh-title black mv0"
                      style={{gridColumn: '1 / span 1', gridRow: '1 / 1'}}>{list.node.businessName}</h1>
                  <h2 className="f6 fw4 mt2 mb0 black-60" style={{gridColumn: '1 / span 1'}}>City: {list.node.city}</h2>
                  <h2 className="f6 fw4 mt2 mb0 black-60" style={{gridColumn: '1 / span 1'}}>Price: {list.node.price}</h2>
                  <p className="f6 fw4 mt2 mb0 black-60"
                     style={{gridColumn: '2 / span 1', gridRow: '2 / span 2'}}>{list.node.description}</p>
                </div>

                <div className="flex justify-between">
                  <Link to={'/update/' + list.node.id}>
                    <button
                      className="f6 link br1 ph3 pv2 mb2 dib white bg-dark-blue pointer"
                    >Details
                    </button>
                  </Link>

                  {/*only show send message to not owner*/}
                  {
                    list.node.postedBy.id !== localStorage.getItem(GC_USER_ID) ?
                      <CreateMessage postedBy={list.node.postedBy.id} title="Send Message"/>
                      : ''
                  }

                </div>

              </article>
            </main>
          )
        )
      }
    </div>

    <div className="flex ml4 mv3 gray">
      <div className="pointer" onClick={() => props.loadMore()}>More</div>
    </div>

    <Map data={props.list}/>

    <Footer/>

  </Main>
)

export default Search