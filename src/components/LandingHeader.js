import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Navbar from './Navbar'
import AvailableForWork from './AvailableForWork'
import { Spring } from 'react-spring'
import Me from '../images/Me.svg'

let LargeBackgroundShape = styled.div`
  position: absolute;
  background-image: linear-gradient(100deg, #ff6480, #f22e63);
  top: -350px;
  right: -110px;
  border-radius: 8%;
  width: 50%;
  height: 800px;
  transform: skew(3deg, 30deg);
  opacity: 1;
  z-index: -1;
  box-shadow: 0 10px 60px RGBA(228, 30, 134, 0.4);
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
  }
`

let HeroCircle1 = styled.div`
  position: absolute;
  background-color: #009efd;
  background-image: linear-gradient(100deg, #2af598, #009efd);
  top: -250px;
  left: -250px;
  border-radius: 100%;
  height: 500px;
  width: 500px;
  opacity: 0.2;
  z-index: -1;
`

let HeroCircle2 = styled.div`
  position: absolute;
  background-color: #f22e63;
  background-image: linear-gradient(100deg, #ff6480, #f22e63);
  width: 80px;
  height: 80px;
  z-index: -1;
  top: 150px;
  left: 120px;
  border-radius: 50%;
`

let HeaderOuter = styled.header`
  width: 100%;
  display: flex;
  height: auto;
  position: relative;
  flex-direction: column;
  background-image: linear-gradient(100deg, #ff6480, #f22e63);

  @media screen and (min-width: 1024px) {
    height: 100vh;
    flex-direction: row;
    background-image: none;
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

  @media screen and (min-width: 1024px) {
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

  @media screen and (min-width: 1024px) {
    width: 50%;
    height: 70vh;
    margin-bottom: 0;
  }
`

let HeaderRight = styled.div`
  position: relative;
  width: 100%;
  @media screen and (min-width: 1024px) {
    width: 50%;
    background: none;
    display: flex;
  }
`

let Greeting = styled.h1`
  font-family: ${props => props.theme.secondaryFont};
  margin-top: 0;
  font-weight: 700;
  letter-spacing: -2px;
  color: white;
  font-size: 55px;
  line-height: 45px;

  @media screen and (min-width: 1024px) {
    color: ${props => props.theme.black};
    font-size: 90px;
    line-height: 80px;
  }
`

let HeaderCopy = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.secondaryFont};

  @media screen and (max-width: 1024px) {
    width: auto;
    color: white;
  }
`

let CTA = styled(Link)`
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
  box-shadow: 0 7px 14px -7px #ff6d88;
  align-self: self-start;
  background: white;
  color: ${props => props.theme.primary};

  margin-top: 20px;
  &:hover {
    transform: scale(0.9);
  }

  @media screen and (min-width: 1024px) {
    color: white;
    background-image: linear-gradient(100deg, #ff6480, #f22e63);
  }
`

export default class LandingHeader extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            contentfulSitewideContent {
              availableForWork
              underConstruction
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
            <Spring from={{ opacity: 0 }} to={{ opacity: 0.2 }}>
              {({ opacity }) => <HeroCircle1 style={{ opacity }} />}
            </Spring>
            <Spring from={{ opacity: 0 }} to={{ opacity: 0.8 }}>
              {({ opacity }) => <HeroCircle2 style={{ opacity }} />}
            </Spring>
            <Spring
              from={{
                opacity: 0,
                top: -650,
              }}
              to={{
                opacity: 1,
                top: -350,
              }}
            >
              {({ opacity, top }) => (
                <LargeBackgroundShape style={{ opacity, top }} />
              )}
            </Spring>
            <Navbar />
            <HeaderInner>
              <Spring delay={1000} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                {props => {
                  let { opacity } = props
                  return (
                    <HeaderLeft style={{ opacity }}>
                      {data.contentfulSitewideContent.availableForWork && (
                        <AvailableForWork />
                      )}
                      <Greeting>{data.contentfulHeader.boldText}</Greeting>
                      <HeaderCopy
                        dangerouslySetInnerHTML={{
                          __html:
                            data.contentfulHeader.headerCopy.childMarkdownRemark
                              .html,
                        }}
                      />
                      {!data.contentfulSitewideContent.underConstruction ? (
                        <CTA to={'/contact'}>Get in touch</CTA>
                      ) : (
                        <HeaderCopy>
                          I'm currently working on this website, but in the
                          background IT'S GETTING THERE! So, check back soon!
                        </HeaderCopy>
                      )}
                    </HeaderLeft>
                  )
                }}
              </Spring>

              <HeaderRight>
                <Spring
                  delay={200}
                  from={{ opacity: 0, bottom: -400 }}
                  to={{ opacity: 1, bottom: 0 }}
                >
                  {({ opacity, bottom }) => (
                    <HeroCharacter src={Me} style={{ opacity, bottom }} />
                  )}
                </Spring>
              </HeaderRight>
            </HeaderInner>
          </HeaderOuter>
        )}
      />
    )
  }
}
