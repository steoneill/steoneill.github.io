import React, { Component, Fragment } from 'react'
import 'confetti-js'

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

let Confetti = styled.canvas``

let d = new Date()
let dd = d.getDate()
let mm = d.getMonth() + 1
let weekday = new Array(7)
weekday[0] = 'Sunday'
weekday[1] = 'Monday'
weekday[2] = 'Tuesday'
weekday[3] = 'Wednesday'
weekday[4] = 'Thursday'
weekday[5] = 'Friday'
weekday[6] = 'Saturday'

let today = weekday[d.getDay()]

export default class header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      confetti: null,
    }
  }

  handleBirthdayFun = () => {
    this.setState({ confetti: true })
  }

  componentDidMount = () => {
    if (dd === 19 && mm === 11) {
      let confettiSettings = { target: 'birthday' }
      let confetti = new window.ConfettiGenerator(confettiSettings)
      confetti.render()
      this.handleBirthdayFun()
    }
  }
  render() {
    return (
      <HeaderOuter>
        <HeaderInner>
          {dd === 19 && mm === 11 && <Confetti id="birthday" />}
          {dd === 19 && mm === 11 ? (
            <TodaysDate>Today's my birthday!</TodaysDate>
          ) : (
            <Fragment>
              {today === 'Friday' ? (
                <TodaysDate>Thank god it's</TodaysDate>
              ) : (
                <TodaysDate>Happy</TodaysDate>
              )}
              <TodaysDate>{today}</TodaysDate>
            </Fragment>
          )}
        </HeaderInner>
      </HeaderOuter>
    )
  }
}
