import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {Image} from 'cloudinary-react'
import AngleDown from 'react-icons/lib/fa/angle-down'
import MdMenu from 'react-icons/lib/md/menu'
import {
  MainHeader,
  MainNav,
  NavUl,
  List,
  ANav,
  AccUl
} from './StyledHeader'

// withRouter to access history
const Header = withRouter((props) => (
  <MainHeader>
    <Logo/>
    <Trigger/>
    <MainNav>
      <LogoBig/>
      <nav>
        <NavUl>
          <List><NavLink dest='/' menuItem='Hot it Works'/></List>
          <List><NavLink dest='/' menuItem='Pricing'/></List>
          <List><NavLink dest='/' menuItem='About'/></List>
          {props.userId &&
          <List>
            <ANav>
              Hi {props.userName}
              <Dropdown/>
            </ANav>
            <AccUl>
              <List><NavLink dest='/account' menuItem='Account'/></List>
              <List><NavLink dest='/messages' menuItem='My Messages'/></List>
              <List><NavLink dest='/list' menuItem='My Assets'/></List>
              <List><NavLink dest='/create' menuItem='Create Asset'/></List>
              <List>
                <LogLink menuItem='Logout' history={props.history} removeId={props.removeId}>Logout</LogLink>
              </List>
            </AccUl>
          </List>}
          {!props.userId && props.location.pathname !== '/login' ?
            <List><NavLink dest='/login' menuItem='Login'/></List>: ''}
        </NavUl>
      </nav>
      <Logo2/>
    </MainNav>
  </MainHeader>
))

export default Header

const Trigger = () => (
  <MdMenu
    size={27}
    color="#ffffff"
    aria-expanded={false}
    className="trigger pointer db dn-l"
    onClick={revealMenu}
  />
)

const NavLink = (props) => (
  <Link
    className="db pv3 ph3 f3 white link"
    to={props.dest}
  >
    {props.menuItem}
  </Link>
)

const LogLink = (props) => (
  <a
    className="db pv3 ph3 f3 white link pointer"
    onClick={() => {
      // logout
      if (props.menuItem === 'Logout') {
        props.removeId()
        props.history.push('/')
      }
    }}
  >
    {props.menuItem}
  </a>
)

const Logo = () => (
  <Link to="/">
    <Image
      cloudName="spottermart"
      publicId="Logo_zk4at5"
      className="dib fr dn-l"
    />
  </Link>
)

const LogoBig = () => (
  <Link to="/">
    <div className="dn db-l">
      <Image
        cloudName="spottermart"
        publicId="Logo_zk4at5"
      />
    </div>
  </Link>
)

const Logo2 = () => (
  <div className="dn db-l">
    <Image cloudName="spottermart" publicId="Logo2_qpq49e"/>
  </div>
)

const Dropdown = () => (
  <AngleDown
    aria-expanded={false}
    className="dropdown-toggle pointer"
    onClick={() => dropdownToggle()}
  />
)

// Toggle reveal navigation
const revealMenu = () => {
  const REVEAL = document.querySelector('.main-nav')
  const TRIGGER = document.querySelector('.trigger')
  const MAIN = document.querySelector('.Main')
  const MENUITEMS = REVEAL.querySelectorAll('nav a')
  const MENUARRAY = Array.apply(null, MENUITEMS)

  if (TRIGGER.getAttribute('aria-expanded') === 'false') {
    REVEAL.classList.add('flex')
    TRIGGER.setAttribute('aria-expanded', true)
  } else {
    REVEAL.classList.remove('flex')
    TRIGGER.setAttribute('aria-expanded', false)
  }

  MAIN.addEventListener('click', function (e) {
    if (TRIGGER.getAttribute('aria-expanded') === 'true') {
      REVEAL.classList.remove('flex')
      TRIGGER.setAttribute('aria-expanded', false)
    }
  })

  REVEAL.addEventListener('click', function (e) {
    if (MENUARRAY.includes(e.target)) {
      REVEAL.classList.remove('flex')
      TRIGGER.setAttribute('aria-expanded', false)
    }

  })

}

const dropdownToggle = () => {
  const DROPDOWN = document.querySelector('.dropdown-toggle')
  const DROP = document.querySelector('.account-nav')
  const MAIN = document.querySelector('.Main')
  const DROPITEMS = DROP.querySelectorAll('a')
  const DROPARRAY = Array.apply(null, DROPITEMS)
  if (DROPDOWN.getAttribute('aria-expanded') === 'false') {
    DROP.classList.add('flex-l')
    DROPDOWN.setAttribute('aria-expanded', true)
  } else {
    DROP.classList.remove('flex-l')
    DROPDOWN.setAttribute('aria-expanded', false)
  }

  MAIN.addEventListener('click', function (e) {
    if (DROPDOWN.getAttribute('aria-expanded') === 'true') {
      DROP.classList.remove('flex-l')
      DROPDOWN.setAttribute('aria-expanded', false)
    }
  })

  DROP.addEventListener('click', function (e) {
    if (DROPARRAY.includes(e.target)) {
      DROP.classList.remove('flex-l')
      DROPDOWN.setAttribute('aria-expanded', false)
    }

  })
}
