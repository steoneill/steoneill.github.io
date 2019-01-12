import React, { Component } from 'react'
import Logo from '../images/logo.svg'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Spring } from 'react-spring'

let NavbarOuter = styled.nav`
  height: 100px;
  padding: 15px;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: auto;
  position: absolute;
  left: 0;
  right: 0;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

let LogoImage = styled.img`
  max-width: 150px;
`

export default class Navbar extends Component {
  render() {
    return (
      <NavbarOuter>
        <Spring
          delay={1000}
          from={{ opacity: 0, bottom: '-100px' }}
          to={{ opacity: 1, bottom: '0' }}
        >
          {({ opacity, bottom }) => (
            <Link to={'/'}>
              <LogoImage style={{ opacity, bottom }} src={Logo} />
            </Link>
          )}
        </Spring>
      </NavbarOuter>
    )
  }
}
