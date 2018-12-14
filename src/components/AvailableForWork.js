import React, { Component } from 'react'
import styled from 'styled-components'

let AvailablePill = styled.div`
  position: absolute;
  top: 20px;
  right: 50px;
  background: ${props => props.theme.primary};
  color: white;
  border-radius: 15px;
  padding: 7px 13px;
  font-size: 16px;
  box-shadow: ${props => props.theme.bs};
`

export default class AvailableForWork extends Component {
  render() {
    return <AvailablePill>I'm available to work!</AvailablePill>
  }
}
