import React from 'react'
import Search from './Search'
const styleCover = {
  backgroundImage: 'url(http://res.cloudinary.com/spottermart/image/upload/MainBGlong_dwkqvv.jpg)'
}

const Hero = () =>
  <div className="sans-serif">
    <div className="cover bg-left bg-center-l" style={styleCover}>
      <div className="bg-black-05 pb5 pb6-m pb7-l">
        <div className="dt w-100 mw8 center">
          <div className="dtc w2 v-mid pa3">

          </div>
        </div>
        <div className="tc-l mt4 mt5-m mt6-l ph3">
          <h1 className="f2 f1-l fw2 dark-blue mb0 lh-title">Buy or Sell</h1>
          <h2 className="fw1 f3 blue mt3 mb4">Sign up to start selling</h2>

          <Search/>

        </div>
      </div>
    </div>
  </div>

export default Hero