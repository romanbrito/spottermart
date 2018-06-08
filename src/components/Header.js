import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {GC_USER_ID, GC_AUTH_TOKEN} from '../constants'
import styled from 'styled-components'
import '../sass/Navigation.css'
import {Image} from 'cloudinary-react'

// withRouter to get access to history
const Header = withRouter((props) => (
  <Heading>
    <Nav>
      <div className="Logo1 dtc v-mid">
        <Link to='/'><Image cloudName="spottermart" publicId="Logo_zk4at5"/></Link>
      </div>

      {/*responsive nav with only css*/}
      <input type="checkbox" id="nav" className="hidden"/>
      <label htmlFor="nav" className="nav-open"><i></i><i></i><i></i></label>

      <div className="nav-container dtc v-mid">
        <ul>
          <li><NavLink href="#" title="How it Works">How it Works</NavLink></li>
          <li><NavLink href="#" title="Pricing">Pricing</NavLink></li>
          <li><NavLink href="#" title="About">About</NavLink></li>
          {props.userId &&
          <li><NavLink
            title="Logout"
            onClick={() => {
              localStorage.removeItem(GC_USER_ID)
              localStorage.removeItem(GC_AUTH_TOKEN)
              props.removeId()
              props.history.push('/')
            }
            }>
            Logout</NavLink></li>}

          {!props.userId && props.location.pathname !== '/login' ?
          <li><Link to='/login'><NavLink title="Login">Login</NavLink></Link></li>:''}
        </ul>
      </div>
      <div className="dtc v-mid logo2">
        <Image cloudName="spottermart" publicId="Logo2_qpq49e"/>
      </div>
    </Nav>
  </Heading>
))


const Heading = styled.header.attrs({
  className: "w-100 ph2 pv2 pv3-ns ph3-m ph4-l",
})`background-color: #f09859`
const Nav = styled.nav.attrs({
  className: "flex items-center justify-between f6 fw6 ttu tracked",
})``
const NavLink = styled.p.attrs({
  className: "link dim white dib mr3 ml3 pointer",
})``

export default Header