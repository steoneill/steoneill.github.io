import React, { Component, Fragment } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import Image from 'gatsby-image'
import HeaderImage from '../images/headerImage.svg'
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
  display: flex;
  position: relative;
  flex-direction: column;
  background: ${props => props.theme.headerBackground};
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

// let HeaderImage = styled(Image)`
//   border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
//   box-shadow: ${props => props.theme.bs};
// `

let HeaderInner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
  text-align: center;
  display: flex;
  padding: 15px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`

let HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

let HeaderRight = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

let TodaysDate = styled.h2`
  font-style: ${props => props.theme.primaryFont};
  margin: 0;
  padding: 0;
  font-size: 39px;
  font-weight: 700;
  text-transform: uppercase;
`

let Greeting = styled.h1`
  font-size: 40px;
  color: ${props => props.theme.primary};
  margin-top: 0;
  font-weight: 700;
  font-size: 61px;
  text-transform: uppercase;
  margin-top: -20px;
`

let HeaderCopy = styled.div`
  font-size: 16px;
  line-height: 24px;
`

let CTA = styled(Link)`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 2px;
  text-align: center;
  color: white;
  padding: 10px 20px;
  border-radius: 40px;
  text-decoration: none;
  transition: all 0.2s;
  background-image: linear-gradient(-90deg, #ff9a8b 0%, #ff6a88 100%);
  box-shadow: 0 7px 14px -7px #ff6d88;
  align-self: self-start;

  margin-top: 20px;
  &:hover {
    transform: scale(1.2);
  }
`

export default class LandingHeader extends Component {
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
            contentfulHeader(location: { eq: "landing" }) {
              boldText
              headerCopy {
                childMarkdownRemark {
                  html
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
                <HeaderCopy
                  dangerouslySetInnerHTML={{
                    __html:
                      data.contentfulHeader.headerCopy.childMarkdownRemark.html,
                  }}
                />
                <CTA to={'/contact'}>Get in touch</CTA>
              </HeaderLeft>
              <HeaderRight>
                <img src={HeaderImage} />
              </HeaderRight>
            </HeaderInner>
          </HeaderOuter>
        )}
      />
    )
  }
}
