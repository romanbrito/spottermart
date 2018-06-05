import React from 'react'

const styleCover = {
  backgroundImage:'url(http://res.cloudinary.com/spottermart/image/upload/MainBGlong_dwkqvv.jpg)'
}

const Header = () =>
  <header className="sans-serif">
    <div className="cover bg-left bg-center-l" style={styleCover}>
      <div className="bg-black-05 pb5 pb6-m pb7-l">
        <nav className="dt w-100 mw8 center">
          <div className="dtc w2 v-mid pa3">

          </div>
        </nav>
        <div className="tc-l mt4 mt5-m mt6-l ph3">
          <h1 className="f2 f1-l fw2 dark-blue mb0 lh-title">This is your super impressive headline</h1>
          <h2 className="fw1 f3 purple mt3 mb4">Now a subheadline where explain your wonderful new startup even
            more</h2>
          <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Call to Action</a>
          <span className="dib v-mid ph3 white-70 mb3">or</span>
          <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="">Secondary call to
            action</a>
        </div>
      </div>
    </div>
  </header>

export default Header