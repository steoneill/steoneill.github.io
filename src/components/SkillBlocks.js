import React, { Component } from 'react'
import s from 'styled-components'

let SkillBlocksOuter = s.section`
width: 100%;
height: 30vh;

`

export default class SkillBlocks extends Component {
  render() {
    return <SkillBlocksOuter />
  }
}
