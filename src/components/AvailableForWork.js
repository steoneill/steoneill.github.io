import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Spring } from 'react-spring'

let AvailablePill = styled.div`
  color: white;
  font-family: ${props => props.theme.secondaryFont};
  background-image: linear-gradient(100deg, #ff6480, #f22e63);
  padding: 5px 15px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2px;
  border-radius: 15px;
  align-self: flex-start;
  position: relative;
  margin: 10px 0;

  @media screen and (max-width: 1024px) {
    margin-top: 150px;
    background: rgba(255, 255, 255, 0.5);
    color: ${props => props.theme.primary};
  }
`

export default class AvailableForWork extends Component {
  render() {
    return (
      <Fragment>
        <Spring
          delay={800}
          from={{ left: -1000, opacity: 0 }}
          to={{ left: 0, opacity: 1 }}
        >
          {({ left, opacity }) => (
            <AvailablePill style={{ left, opacity }}>
              I'm available for freelance work!
            </AvailablePill>
          )}
        </Spring>
      </Fragment>
    )
  }
}
