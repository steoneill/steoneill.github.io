import React, { Component } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

let ImageItem = styled(Image)``

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

let AboutContent = styled.div``

let AboutImages = styled.div``
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
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: -1;
`

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
                fixed(width: 450, height: 450, cropFocus: FACES) {
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
                <AboutImages>
                  {/* {data.contentfulAbout.images.map((image, i) => {
                    return (
                      <ImageItem
                        fixed={image.fixed}
                        className={`image-${i + 1}`}
                        key={image.id}
                      />
                    )
                  })} */}
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
