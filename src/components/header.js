import React, { Component } from 'react'

import styled from 'styled-components'

let HeaderOuter = styled.header`
  width: 100%;
  height: 80vh;
`

let HeaderInner = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
`

let TodaysDate = styled.h2`
  font-style: serif;
`

let d = new Date()
let weekday = new Array(7)
weekday[0] = 'Sunday'
weekday[1] = 'Monday'
weekday[2] = 'Tuesday'
weekday[3] = 'Wednesday'
weekday[4] = 'Thursday'
weekday[5] = 'Friday'
weekday[6] = 'Saturday'

let today = weekday[d.getDay()]

console.log(today)

export default class header extends Component {
  render() {
    return (
      <HeaderOuter>
        <HeaderInner>
          {today !== 'Friday' ? (
            <TodaysDate>Happy</TodaysDate>
          ) : (
            <TodaysDate>Thank god it's</TodaysDate>
          )}
          <TodaysDate>{today}</TodaysDate>
        </HeaderInner>
      </HeaderOuter>
    )
  }
}
