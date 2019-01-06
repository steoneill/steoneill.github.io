import React, { Component, Fragment } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import Navbar from './Navbar'
import Image from 'gatsby-image'
import HeaderMask from '../images/header_mask.png'
import AvailableForWork from './AvailableForWork'

import Me from '../images/Me.svg'
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

let HeaderAnimation = styled.div`
  transform: skewY(-8deg);
  transform-origin: top left;
  background-image: linear-gradient(56deg, #fb43b3 1%, #f6207c 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

let HeaderOuter = styled.header`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

let LandingImage = styled.img`
  position: absolute;
  right: 0;
  top: -130px;
  min-width: 50%;
  z-index: -1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

let HeroCharacter = styled.img`
  bottom: 0;
  left: 0;
  position: absolute;

  width: 100%;
  @media screen and (max-width: 1024px) {
    position: relative;
  }
`

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
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    width: 50%;
    height: 70vh;
    margin-bottom: 0;
  }
`

let HeaderRight = styled.div`
  position: relative;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
    background: none;
    display: flex;
  }
`

let TodaysDate = styled.h2`
  font-style: ${props => props.theme.secondaryFont};
  margin: 0;
  padding: 0;
  font-size: 39px;
  font-weight: 700;
  text-transform: uppercase;
`

let Greeting = styled.h1`
  font-size: 52px;
  font-family: ${props => props.theme.secondaryFont};
  color: white;
  margin-top: 0;
  font-weight: 700;
  font-size: 52px;
  line-height: 56px;
  letter-spacing: -2px;
`

let HeaderCopy = styled.div`
  font-size: 20px;
  line-height: 26px;
  width: 50%;
  color: white;

  @media screen and (max-width: 1024px) {
    width: auto;
  }
`

let CTA = styled(Link)`
  color: ${props => props.theme.primary};

  font-family: ${props => props.theme.secondaryFont};
  background: white;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 16px 40px;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.2s;
  background-image: linear-gradient(-90deg, #ff9a8b 0%, #ff6a88 100%);
  box-shadow: 0 7px 14px -7px #ff6d88;
  align-self: self-start;

  margin-top: 20px;
  &:hover {
    transform: scale(0.9);
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
            contentfulSitewideContent {
              availableForWork
              underConstruction
            }
            file(name: { eq: "header_svg" }) {
              absolutePath
              id
            }
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
            <HeaderAnimation />
            <Navbar />

            <HeaderInner>
              <HeaderLeft>
                {/* <TodaysDate>{this.todaysCopy()}</TodaysDate> */}
                {data.contentfulSitewideContent.availableForWork && (
                  <AvailableForWork />
                )}
                <Greeting>{data.contentfulHeader.boldText}</Greeting>
                <HeaderCopy
                  dangerouslySetInnerHTML={{
                    __html:
                      data.contentfulHeader.headerCopy.childMarkdownRemark.html,
                  }}
                />
                {!data.contentfulSitewideContent.underConstruction ? (
                  <CTA to={'/contact'}>Get in touch</CTA>
                ) : (
                  <HeaderCopy>
                    I'm currently working on this website, but in the background
                    IT'S GETTING THERE! So, check back soon!
                  </HeaderCopy>
                )}
              </HeaderLeft>
              <HeaderRight>
                <HeroCharacter src={Me} />
              </HeaderRight>
            </HeaderInner>
          </HeaderOuter>
        )}
      />
    )
  }
}
