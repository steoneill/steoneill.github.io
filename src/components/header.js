import React, { Component } from 'react'
import 'confetti-js'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'

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

let HeaderOuter = styled.header`
  width: 100%;
  height: 80vh;
  display: flex;
`

let HeaderInner = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;

  display: flex;
`

let HeaderLeft = styled.div``

let HeaderRight = styled.div``

let TodaysDate = styled.h2`
  font-style: ${props => props.theme.primaryFont};
`

let Greeting = styled.h1`
  font-size: 40px;
  color: ${props => props.theme.primary};
`

let HeaderCopy = styled.p`
  font-size: 16px;
  font-family: ${props => props.theme.secondaryFont};
  width: 50%;
  margin-bottom: 30px;
`

let CTA = styled.a`
  background: ${props => props.theme.primary};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
`

let Confetti = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;

  &::after {
    content: '';
    width: 100%;
    height: 100px;
    background: red;
  }
`

export default class header extends Component {
  constructor(props) {
    super(props)

    this.todaysCopy = this.todaysCopy.bind(this)

    this.state = {
      confetti: null,
      birthday: false,
    }
  }

  componentDidMount = () => {
    if (window != undefined) {
      if (dd === 19 && mm === 11) {
        this.setState({
          birthday: true,
          confetti: true,
        })
        setTimeout(() => {
          let confettiSettings = {
            target: 'birthday',
            max: '300',
            clock: '10',
            rotate: true,
          }
          let confetti = new window.ConfettiGenerator(confettiSettings)
          confetti.render()
        }, 200)
      }
    }
  }

  todaysCopy() {
    if (this.state.birthday) {
      return `Today's my birthday!`
    } else if (today === 'Friday') {
      return `Thank god it's Friday!`
    } else {
      return `Happy ${today}!`
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            headerImage: file(relativePath: { eq: "hero_photo.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        `}
        render={data => (
          <HeaderOuter>
            {this.state.birthday && <Confetti id="birthday" />}
            <HeaderInner>
              <HeaderLeft>
                <TodaysDate>{this.todaysCopy()}</TodaysDate>
                <Greeting>My name's Ste!</Greeting>
                <HeaderCopy>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                  at laudantium dignissimos ducimus nihil consectetur autem
                  pariatur exercitationem natus repellat. Incidunt blanditiis
                  qui alias voluptatibus consectetur eos doloremque ex aut!
                </HeaderCopy>
                <CTA>Get in touch</CTA>
              </HeaderLeft>
              <Img fluid={data.headerImage.childImageSharp.fluid} />
            </HeaderInner>
          </HeaderOuter>
        )}
      />
    )
  }
}
