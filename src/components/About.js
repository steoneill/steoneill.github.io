import React, { Component } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

let ImageItem = styled(Image)`
  max-width: 300px;
  max-height: 200px;
  border-radius: 5px;
  box-shadow: ${props => props.theme.bs};
  margin: 5px;
  transition: all 0.3s;
  clear: both;
  top: 0;
  left: 0;
  position: absolute;

  &:hover {
    transform: scale(1.3);
    z-index: 999;
  }
`

let AboutOuter = styled.section`
  display: flex;
  justify-content: center;
  justify-items: center;
  position: relative;
  height: 60vh;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

let AboutInner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  padding: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

let AboutContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  padding: 30vh 12vh;
`

let AboutTitle = styled.h2`
  font-size: 25px;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  &::after {
    content: '';
    height: 10px;
    width: 100%;
    display: block;
    background: #d2f1f9;
    position: absolute;
    bottom: 0px;
    z-index: -1;
  }
`

let AboutCopy = styled.p`
  line-height: 20px;
  font-size: 18px;
  text-align: center;
`

let AboutImages = styled.div``
export default class About extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            contentfulAbout {
              title
              copy {
                content {
                  content {
                    value
                  }
                }
              }
              images {
                id
                title
                fixed(width: 500, height: 400, cropFocus: FACES) {
                  ...GatsbyContentfulFixed
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <AboutOuter>
              <AboutInner>
                <AboutContent>
                  {data.contentfulAbout.images.map((image, i) => {
                    return (
                      <ImageItem
                        fixed={image.fixed}
                        className={`image-${i + 1}`}
                        key={image.id}
                      />
                    )
                  })}
                  <AboutTitle>{data.contentfulAbout.title}</AboutTitle>
                  <AboutCopy>
                    {data.contentfulAbout.copy.content[0].content[0].value}
                  </AboutCopy>
                </AboutContent>
              </AboutInner>
            </AboutOuter>
          )
        }}
      />
    )
  }
}
