import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import '../sass/Header.css'
import styled from 'styled-components'
import {Image} from 'cloudinary-react'
import AngleDown from 'react-icons/lib/fa/angle-down'
import MdMenu from 'react-icons/lib/md/menu'

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
                onClick={() => dropdownToggle()}
              />
            </a>
            <ul className="dn-l absolute-l dropdown-bg">
              <li className="list"><NavLink dest='/list' menuItem="My Assets"/></li>
              <li className="list"><NavLink dest='/create' menuItem="Create Asset"/></li>
              <li className="list"><NavLink dest='/' menuItem="Logout" history={props.history} removeId={props.removeId}/></li>
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
  <Link
    className="db pv3 ph3 f3 white link" to={props.dest}
    onClick={() => {
      // toggle menu
      showMenu()
      dropdownToggle()
      // logout
      if (props.menuItem === 'Logout') {
        props.removeId()
        props.history.push('/')
      }
    }
    }>
    {props.menuItem}
  </Link>
)

const MenuIcon = () => (
  <MobileMenu
    onClick={showMenu}>
    <MdMenu size={27} color="white"/>
  </MobileMenu>
)

const MobileMenu = styled.div.attrs({
  className: "ml1 pointer dib dn-l",
})`margin: 6px 0`

const Ul = styled.ul.attrs({
  className: "list pa0 ma0 flex-l",
})`background-color: #f09859`

const Heading = styled.header.attrs({
  className: "w-100 ph2 pv2",
})`background-color: #f09859`

// toggle menu on small screens
const showMenu = () => {
  const element = document.getElementById("main-nav");
  (element.className === "dn flex-l items-center justify-between-l") ? element.className += " db absolute w-100 left-0 relative-l" : element.className = "dn flex-l items-center justify-between-l"
}

// drop down toggle menu for large screens
const dropdownToggle = () => {
  const dropDown = document.getElementsByClassName('dropdown-bg');
  if (dropDown.length > 0) {
    (dropDown[0].className === "dn-l absolute-l dropdown-bg") ? dropDown[0].className += " db-l z-max pa0-l" : dropDown[0].className = "dn-l absolute-l dropdown-bg";
  }
};

export default Header