import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {GC_USER_ID, GC_AUTH_TOKEN} from '../constants'
import '../sass/Header.css'
import styled from 'styled-components'
import {Image} from 'cloudinary-react'

// withRouter to get access to history
const Header = withRouter((props) => (
  <Heading>
    <MenuIcon/>
    <div id="main-nav" className="dn">
      <div className="dn"><Link to='/'><Image cloudName="spottermart" publicId="Logo_zk4at5"/></Link></div>
      <nav>
        <Ul>
          <li><NavLink dest='/' menuItem="Home"/></li>
          <li><NavLink dest='/' menuItem="How it Works"/></li>
          <li><NavLink dest='/' menuItem="Pricing"/></li>
          <li><NavLink dest='/' menuItem="About"/></li>
          {props.userId &&
          <li><NavLink dest='/' menuItem="Logout"/></li>}
          {!props.userId && props.location.pathname !== '/login' ?
          <li><NavLink dest='/login' menuItem="Login"/></li>:''}
        </Ul>
      </nav>
      <div className="dn"><Image cloudName="spottermart" publicId="Logo2_qpq49e"/></div>
    </div>
  </Heading>
))

const NavLink = (props) => (
  <Link className="db pv3 ph3 f3 white link" to={props.dest}
  onClick={ () => {
    // toggle menu
    showMenu()
    // logout
    if (props.menuItem === 'Logout') {
      localStorage.removeItem(GC_USER_ID)
      localStorage.removeItem(GC_AUTH_TOKEN)
      props.removeId()
      props.history.push('/')
    }}
  }>
    {props.menuItem}
    </Link>
)

const MenuIcon = () => (
  <div
    className="menu-icon ml1 pointer"
    onClick={showMenu}>
    <div/>
    <div/>
    <div/>
  </div>
)

const Ul = styled.ul.attrs({
  className: "list pa0 ma0",
})`background-color: #f09859`

const Heading = styled.header.attrs({
  className: "w-100 ph2 pv2",
})`background-color: #f09859`

// toggle menu on small screens
const showMenu = () => {
  const element = document.getElementById("main-nav");
  (element.className === "dn") ? element.className += " db": element.className = "dn"
}

export default Header