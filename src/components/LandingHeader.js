import React, { Component, Fragment } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Navbar from './Navbar'
import AvailableForWork from './AvailableForWork'
import { Spring, Trail } from 'react-spring'
import Me from '../images/svg/Me.svg'
import HeaderBackground from '../images/png/Header_BG.png'

//Delare all styles

// Start of background styles

// start framework styles for content

let HeaderOuter = styled.header`
  width: 100%;
  display: flex;
  height: auto;
  position: relative;
  flex-direction: column;
  background-image: url(${HeaderBackground});
  background-size: cover;

  @media screen and (min-width: 1024px) {
    height: 90vh;
    flex-direction: row;
    padding-bottom: 120px;
  }
`

let HeaderInner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 50px 15px;

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

let Greeting = styled.h1`
  font-family: ${props => props.theme.primaryFont};
  margin: 0;
  font-weight: 700;
  letter-spacing: -2px;
  font-size: 55px;
  line-height: 45px;
  color: ${props => props.theme.black};

  @media screen and (min-width: 1024px) {
    font-size: 90px;
    line-height: 80px;
  }
`

let HeaderCopy = styled.div`
  font-size: 22px;
  line-height: 26px;
  font-weight: 200;
  color: #4a505e;
  font-family: ${props => props.theme.secondaryFont};
  padding: 58px 0px;

  @media screen and (max-width: 1024px) {
    width: auto;
  }
`

let CTA = styled(Link)`
  font-family: ${props => props.theme.secondaryFont};
  background: white;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding: 16px 40px;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 7px 14px -7px #ff6d88;
  align-self: self-start;
  color: white;
  background-image: linear-gradient(100deg, #ff6480, #f22e63);

  margin-top: 20px;
  &:hover {
    transform: scale(0.9);
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

let HeroCharacter = styled(Me)`
  bottom: 0;
  left: 0;
  position: absolute;
  @media screen and (max-width: 1024px) {
    position: relative;
  }
`

let HeroCharacterWrapper = styled.object`
  width: 50%;
`

//end framework styles and all declarations

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
                      <Trail
                        delay={1000}
                        items={data.contentfulHeader.boldText.split('/n')}
                        key={item => item.key}
                        from={{
                          transform: 'translate3d(0,100px,0)',
                          opacity: 0,
                        }}
                        to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
                      >
                        {item => ({ transform, opacity }) => (
                          <Greeting style={{ transform, opacity }}>
                            <span style={{ transform, opacity }}>{item}</span>
                          </Greeting>
                        )}
                      </Trail>
                      <Spring
                        delay={1500}
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                      >
                        {({ opacity }) => (
                          <Fragment>
                            <HeaderCopy
                              style={{ opacity }}
                              dangerouslySetInnerHTML={{
                                __html:
                                  data.contentfulHeader.headerCopy
                                    .childMarkdownRemark.html,
                              }}
                            />
                          </Fragment>
                        )}
                      </Spring>

                      <Spring
                        delay={1500}
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                      >
                        {({ opacity }) => (
                          <CTA to={'/contact'} style={{ opacity }}>
                            Get in touch
                          </CTA>
                        )}
                      </Spring>
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
                    <HeroCharacterWrapper>
                      <HeroCharacter style={{ opacity, bottom }} />
                    </HeroCharacterWrapper>
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
