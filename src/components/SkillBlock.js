import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

let SkillBlockOuter = styled.div`
  height: 475px;
  width: 354px;
  box-shadow: ${props => props.theme.bs};
  border-radius: 5px;
  position: relative;
  transition: all 0.3s;
  overflow: hidden;
  background: white;

  &:hover {
    background: ${props => props.theme.primary};
    transform: scale(1.05);
    color: white;
  }
`

let SkillBlockInner = styled.div`
  padding: 15px;
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
`

export default class SkillBlock extends Component {
  render() {
    return (
      <SkillBlockOuter>
        {console.log(this.props)}
        <SkillBlockInner>{this.props.title}</SkillBlockInner>
        <Circle1 />
        <Circle2 />
        <Circle3 />
      </SkillBlockOuter>
    )
  }
}
