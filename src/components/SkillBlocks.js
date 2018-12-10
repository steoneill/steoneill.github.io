import React, { Component } from 'react'
import s from 'styled-components'

let SkillBlocksOuter = s.section`
background: linear-gradient(to right, #38ef7d, #11998e);
width: 100%;
height: 30vh;

`

export default class SkillBlocks extends Component {
  render() {
    return <SkillBlocksOuter />
  }
}
