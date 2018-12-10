import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import Image from 'gatsby-image'
import HeaderMask from '../images/header_mask.png'
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

let HeaderOuter = styled.header`
  width: 100%;
  height: 70vh;
  display: flex;
  position: relative;
  flex-direction: column;
  background: ${props => props.theme.headerBackground};
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

let HeaderImage = styled(Image)`
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  box-shadow: ${props => props.theme.bs};
`

let HeaderInner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
  margin: auto;
  text-align: center;
  display: flex;
  padding: 15px;
`

let HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;

  text-align: left;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

let HeaderRight = styled.div`
  width: 50%;
`

let Available = styled.div`
  padding: 10px 30px;
  background: ${props => props.theme.primary};
  color: white;
  position: fixed;
  border-radius: 50px;
  transform: rotate(20deg);
  right: 0;
  top: 60px;
`

let TodaysDate = styled.h2`
  font-style: ${props => props.theme.primaryFont};
  margin: 0;
  padding: 0;
`

let Greeting = styled.h1`
  font-size: 40px;
  color: ${props => props.theme.primary};
  margin-top: 0;
`

let HeaderCopy = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-family: ${props => props.theme.secondaryFont};
`

let CTA = styled(Link)`
  background: ${props => props.theme.primary};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: ${props => props.theme.bsPink};
  text-decoration: none;
  transition: all 0.2s;
  align-self: self-start;

  margin-top: 20px;
  &:hover {
    transform: scale(1.2);
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

  componentDidMount = () => {}

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
            contentfulHeader {
              boldText
              availableForWork
              headerImage {
                fluid {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
              headerCopy {
                content {
                  content {
                    value
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <HeaderOuter>
            <HeaderInner>
              <HeaderLeft>
                <TodaysDate>{this.todaysCopy()}</TodaysDate>
                <Greeting>{data.contentfulHeader.boldText}</Greeting>
                <HeaderCopy>
                  {data.contentfulHeader.headerCopy.content[0].content[0].value}
                </HeaderCopy>
                <CTA to={'/contact'}>Get in touch</CTA>
              </HeaderLeft>
              <HeaderRight />
              {data.contentfulHeader.availableForWork && (
                <Available>I'm available for freelance projects!</Available>
              )}
            </HeaderInner>
          </HeaderOuter>
        )}
      />
    )
  }
}
