import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Spring } from 'react-spring'

let AvailablePill = styled.div`
  color: #69717e;
  font-family: ${props => props.theme.secondaryFont};
  padding: 8px 30px;
  border: 1px solid #eaeaea;
  background: #fafafd;
  font-size: 15px;
  font-weight: 500;
  border-radius: 17.5px;
  align-self: flex-start;
  position: relative;
  margin: 30px 0;
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
