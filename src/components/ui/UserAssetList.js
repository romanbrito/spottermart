import React from 'react'
import {Link} from 'react-router-dom'

const UserAssetList = (props) => (
  <div>
    {
      props.list.map(list => (
          <main key={list.cursor} className="mw6 center">
            <article>
              <p className="link dt w-100 bb b--black-10 pb2 mt2 blue" href="#0">
                <div className="dtc w3">
                  <img src={list.node.pictures && list.node.pictures.length > 0 ? list.node.pictures[0].url:''} alt={list.node.businessName}/>
                </div>
                <div className="dtc v-top pl2">
                  <h1 className="f6 f5-ns fw6 lh-title black mv0">{list.node.businessName}</h1>
                  <h2 className="f6 fw4 mt2 mb0 black-60">{list.node.city}</h2>
                  <dl className="mt2 f6">
                    <dt className="clip">Price</dt>
                    <dd className="ml0">{list.node.id}</dd>
                  </dl>
                </div>
                <Link to={'/update/' + list.node.id}><button className="f6 link br1 ph3 pv2 mb2 dib white bg-dark-blue pointer">Update</button></Link>
              </p>
            </article>
          </main>
        )
      )
    }
    <div className="flex ml4 mv3 gray">
      <div className="pointer" onClick={() => props.loadMore()}>More</div>
    </div>
  </div>
)

export default UserAssetList