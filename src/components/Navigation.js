import React from 'react'
import styled from 'styled-components'
import '../sass/Navigation.css'
import {Image} from 'cloudinary-react'

export const Navigation = () =>
  <Header>
    <Nav>
      <div className="dtc v-mid">
        <Image cloudName="spottermart" publicId="Logo_zk4at5"/>
      </div>
      <div className="dtc v-mid pl3">
        <ul>
          <li><NavLink href="#" title="Home">Home</NavLink></li>
          <li><NavLink href="#" title="About">About</NavLink></li>
          <li><NavLink href="#" title="Store">Store</NavLink></li>
          <li><NavLink href="#" title="Contact">Contact</NavLink></li>
        </ul>
      </div>
      <div className="dtc v-mid logo2">
        <Image cloudName="spottermart" publicId="Logo2_qpq49e"/>
      </div>
    </Nav>
  </Header>

const Header = styled.header.attrs({
  className: "fixed w-100 ph2 pv2 pv3-ns ph3-m ph4-l",
})`background-color: #f09859`
const Nav = styled.nav.attrs({
  className: "flex items-center justify-between f6 fw6 ttu tracked",
})``
const NavLink = styled.a.attrs({
  className: "link dim white dib mr3 ml3",
})``