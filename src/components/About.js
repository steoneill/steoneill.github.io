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
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (max-width: 768px) {
    max-width: 150px;
    max-height: 75px;
  }
  &:hover {
    transform: scale(1.3);
    z-index: 999;
  }
`

let AboutOuter = styled.section`
  display: flex;
  justify-content: center;
  justify-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

let AboutInner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  position: relative;
  padding: 15px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

let AboutContent = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 30px;
`

let AboutImages = styled.div`
  grid-area: images;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
                <AboutImages>
                  {data.contentfulAbout.images.map((image, i) => {
                    return (
                      <ImageItem
                        fixed={image.fixed}
                        className={`image-${i}`}
                        key={image.id}
                      />
                    )
                  })}
                </AboutImages>
                <AboutContent>
                  <h2>{data.contentfulAbout.title}</h2>
                  <p>{data.contentfulAbout.copy.content[0].content[0].value}</p>
                </AboutContent>
              </AboutInner>
            </AboutOuter>
          )
        }}
      />
    )
  }
}
