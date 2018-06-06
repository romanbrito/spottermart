import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import '../sass/Navigation.css'
import {Image} from 'cloudinary-react'

const Header = () =>
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
            <li><NavLink href="#" title="Home">How it Works</NavLink></li>
            <li><NavLink href="#" title="About">Pricing</NavLink></li>
            <li><NavLink href="#" title="Store">About</NavLink></li>
            <li><Link to='login'><NavLink href="#" title="Contact">Login</NavLink></Link></li>
          </ul>
        </div>
        <div className="dtc v-mid logo2">
          <Image cloudName="spottermart" publicId="Logo2_qpq49e"/>
        </div>
      </Nav>
    </Heading>


const Heading = styled.header.attrs({
  className: "w-100 ph2 pv2 pv3-ns ph3-m ph4-l",
})`background-color: #f09859`
const Nav = styled.nav.attrs({
  className: "flex items-center justify-between f6 fw6 ttu tracked",
})``
const NavLink = styled.a.attrs({
  className: "link dim white dib mr3 ml3",
})``

export default Header