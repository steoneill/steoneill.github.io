import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

let SkillBlockOuter = styled.div`
  height: 475px;
  width: 354px;
  box-shadow: ${props => props.theme.bs};
  border-radius: 5px;
  position: relative;
  transition: all 0.3s;

  &:hover {
    background: ${props => props.theme.primary};
    transform: scale(1.05);
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

let Circle1 = styled.div`
  width: 240px;
  height: 240px;
  position: absolute;
  border-radius: 50%;
  top: -100px;
  left: -100px;
  background: rgba(255, 255, 255, 0.4);
  z-index: 1;

  &:hover {
    animation: 0.3s ${fadeIn} ease-in;
  }
`

let Circle2 = styled.div`
  width: 550px;
  height: 550px;
  position: absolute;
  border-radius: 50%;
  top: -260px;
  left: -260px;
  background: rgba(255, 255, 255, 0.2);
  z-index: 1;
  &:hover {
    animation: 0.7s ${fadeIn} ease-in;
  }
`

let Circle3 = styled.div`
  width: 750px;
  height: 750px;
  position: absolute;
  border-radius: 50%;
  top: -325px;
  left: -325px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1;

  &:hover {
    animation: 1s ${fadeIn} ease-in;
  }
`

export default class SkillBlock extends Component {
  render() {
    return (
      <SkillBlockOuter>
        <Circle1 />
        <Circle2 />
        <Circle3 />
      </SkillBlockOuter>
    )
  }
}
