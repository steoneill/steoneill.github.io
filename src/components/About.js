import React, { Component } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import AboutShape from '../images/AboutShape.svg'

let ImagesOuter = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(17, 1fr);

  grid-gap: 25px;
  transform: rotate(-15deg);
  left: -200px;
  position: absolute;
`

let ImageItem = styled(Image)`
  border-radius: 5px;
  box-shadow: ${props => props.theme.bs};

  &.image {
    &-1 {
      width: 231px;
      height: 280px;

      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 6;
    }

    &-2 {
      width: 231px;
      height: 335px;
      grid-column-start: 4;
      grid-column-end: 8;
      grid-row-start: 2;
      grid-row-end: 8;
    }

    &-3 {
      width: 231px;
      height: 344px;
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 6;
      grid-row-end: 12;
    }

    &-4 {
      width: 231px;
      height: 332px;
      grid-column-start: 4;
      grid-column-end: 8;
      grid-row-start: 8;
      grid-row-end: 17;
    }
  }
`

let AboutOuter = styled.section`
  display: flex;
  justify-content: center;
  justify-items: center;
  position: relative;
  z-index: 1;
  height: 90vh;
  box-sizing: border-box;
`

let AboutInner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  padding: 90px 15px;
  display: flex;

  margin-bottom: 120px;
`
let AboutContent = styled.div`
  width: 50%;
`
let AboutImages = styled.div`
  width: 50%;
  position: relative;
`
let Wave = styled.svg`
  background: #f4edf5;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: auto;

  path {
    fill: white;
  }
`

let WaveOuter = styled.div`
  width: auto;
  position: absolute;
  bottom: 0;
  z-index: -1;
`

let AboutShapeOuter = styled.object`
  width: 100%;
  z-index: -1;
  position: absolute;
`

let AboutBackground = styled(AboutShape)``

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
                fluid {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <AboutOuter>
              <AboutInner>
                <AboutImages>
                  <ImagesOuter>
                    {data.contentfulAbout.images.map((image, i) => {
                      return (
                        <ImageItem
                          fluid={image.fluid}
                          className={`image-${i + 1}`}
                          key={image.id}
                        />
                      )
                    })}
                  </ImagesOuter>
                  <AboutShapeOuter>
                    <AboutBackground />
                  </AboutShapeOuter>
                </AboutImages>
                <AboutContent>
                  <h2>{data.contentfulAbout.title}</h2>
                  <p>{data.contentfulAbout.copy.content[0].content[0].value}</p>
                </AboutContent>
              </AboutInner>
              <WaveOuter>
                <Wave
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 3600 248"
                >
                  <path d="M3601,31.227S2736.31,201.97,1661,72.2C547.345-62.2,0,32.227,0,32.227V343H3602Z" />
                </Wave>
              </WaveOuter>
            </AboutOuter>
          )
        }}
      />
    )
  }
}
