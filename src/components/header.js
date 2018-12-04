import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
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
  background: ${props => props.theme.headerBackground};
  margin-bottom: 20vh;

  &::after {
    content: '';
    height: 10vh;

    position: absolute;
    bottom: -10vh;
    width: 100%;
    border-radius: 0 0 30% 30%;
    background: ${props => props.theme.headerBackground};
  }
`

let HeaderInner = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  text-align: center;
  display: flex;
`

let HeaderImage = styled(Image)`
  img {
    mask-image: ${HeaderMask};
    mask-type: alpha;
  }
`

let HeaderLeft = styled.div`
  width: 50%;
  text-align: left;
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

let CTA = styled.a`
  background: ${props => props.theme.primary};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: ${props => props.theme.bsPink};
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    transform: scale3d(1.2);
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
              <HeaderRight>
                <HeaderImage fluid={data.contentfulHeader.headerImage.fluid} />
              </HeaderRight>
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
