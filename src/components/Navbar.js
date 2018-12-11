import React, { Component } from 'react'
import Logo from '../images/logo.svg'
import styled from 'styled-components'

let NavbarOuter = styled.nav`
  height: 100px;
  padding: 15px;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
`

let LogoImage = styled.img`
  max-width: 150px;
`

export default class Navbar extends Component {
  render() {
    return (
      <NavbarOuter>
        <LogoImage src={Logo} />
      </NavbarOuter>
    )
  }
}
