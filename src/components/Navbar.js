import React, { Component } from 'react'
import Logo from '../images/svg/logo.svg'
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

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`

let MenuItems = styled.menu``

let LogoWrapper = styled.object``

let LogoImage = styled(Logo)`
  max-width: 150px;
  fill: #fff;
  @media screen and (min-width: 1024px) {
    fill: #fa446e;
  }
`

export default class Navbar extends Component {
  render() {
    return (
      <Spring
        delay={500}
        from={{ opacity: 0, bottom: '-100px' }}
        to={{ opacity: 1, bottom: '0' }}
      >
        {({ opacity }) => (
          <NavbarOuter>
            <Link to={'/'}>
              <LogoWrapper>
                <LogoImage style={{ opacity }} />
                <MenuItems />
              </LogoWrapper>
            </Link>
          </NavbarOuter>
        )}
      </Spring>
    )
  }
}
