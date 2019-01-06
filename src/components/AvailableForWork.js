import React, { Component } from 'react'
import styled from 'styled-components'

let AvailablePill = styled.div`
  color: white;
  font-family: ${props => props.theme.secondaryFont};
  background: rgba(255, 255, 255, 0.2);
  padding: 5px 15px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2px;
  border-radius: 15px;
  align-self: flex-start;
  margin: 10px 0;

  @media screen and (max-width: 768px) {
    margin-top: 150px;
  }
`

export default class AvailableForWork extends Component {
  render() {
    return <AvailablePill>I'm available for freelance work!</AvailablePill>
  }
}
