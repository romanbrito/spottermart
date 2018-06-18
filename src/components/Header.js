import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {GC_USER_ID, GC_AUTH_TOKEN} from '../constants'
import '../sass/Header.css'
import styled from 'styled-components'
import {Image} from 'cloudinary-react'
import AngleDown from 'react-icons/lib/fa/angle-down'
import AngleUp from 'react-icons/lib/fa/angle-up'

// withRouter to get access to history
const Header = withRouter((props) => (
  <Heading>
    <MenuIcon/>
    <div className="dib fr dn-l"><Link to='/'><Image cloudName="spottermart" publicId="Logo_zk4at5"/></Link></div>
    <div id="main-nav" className="dn flex-l items-center justify-between-l">
      <div className="dn db-l"><Link to='/'><Image cloudName="spottermart" publicId="Logo_zk4at5"/></Link></div>
      <nav>
        <Ul>
          <li><NavLink dest='/' menuItem="How it Works"/></li>
          <li><NavLink dest='/' menuItem="Pricing"/></li>
          <li><NavLink dest='/' menuItem="About"/></li>
          {props.userId &&
          <li>
            <a className="db pv3 ph3 f3 white link pointer">
              Account
                <AngleDown
                  onClick={(e) => dropdownToggle(e)}
                />
            </a>
            <ul className="dn-l absolute-l dropdown-bg">
              <li className="list"><NavLink dest='/create' menuItem="Create Asset"/></li>
              <li className="list"><NavLink dest='/' menuItem="Logout"/></li>
            </ul>
          </li>}
          {!props.userId && props.location.pathname !== '/login' ?
            <li><NavLink dest='/login' menuItem="Login"/></li> : ''}

        </Ul>
      </nav>
      <div className="dn db-l"><Image cloudName="spottermart" publicId="Logo2_qpq49e"/></div>
    </div>
  </Heading>
))

const NavLink = (props) => (
  <Link className="db pv3 ph3 f3 white link" to={props.dest}
        onClick={() => {
          // toggle menu
          showMenu()
          hideDropDown()
          // logout
          if (props.menuItem === 'Logout') {
            localStorage.removeItem(GC_USER_ID)
            localStorage.removeItem(GC_AUTH_TOKEN)
            props.removeId()
            props.history.push('/')
          }
        }
        }>
    {props.menuItem}
  </Link>
)

const MenuIcon = () => (
  <div
    className="menu-icon ml1 pointer dib dn-l"
    onClick={showMenu}>
    <div/>
    <div/>
    <div/>
  </div>
)

const Ul = styled.ul.attrs({
  className: "list pa0 ma0 flex-l",
})`background-color: #f09859`

const Heading = styled.header.attrs({
  className: "w-100 ph2 pv2",
})`background-color: #f09859`

// toggle menu on small screens
const showMenu = () => {
  const element = document.getElementById("main-nav");
  (element.className === "dn flex-l items-center justify-between-l") ? element.className += " db" : element.className = "dn flex-l items-center justify-between-l"
}

// drop down toggle menu for large screens
const dropdownToggle = (e) => {
  if (e.target.parentElement.nodeName === 'A') {
    const element = e.target.parentElement.nextElementSibling;
    (element.className === "dn-l absolute-l dropdown-bg") ? element.className += " db-l" : element.className="dn-l absolute-l dropdown-bg";
    // in case you clicked directly into the svg object since parent would be g and svg
  } else {
    const element = e.target.parentElement.parentElement.parentElement.nextElementSibling;
    (element.className === "dn-l absolute-l dropdown-bg") ? element.className += " db-l" : element.className="dn-l absolute-l dropdown-bg";
  }
};

const hideDropDown = () => {
  console.log('hide');
  const dropDown = document.getElementsByClassName('dropdown-bg');
  // there is only one dropdown if there were more, use map
  (dropDown[0].className === "dn-l absolute-l dropdown-bg db-l") ? dropDown[0].className="dn-l absolute-l dropdown-bg" : dropDown[0].className="dn-l absolute-l dropdown-bg db-l";
};

export default Header