import React, { Component } from 'react'
import s from 'styled-components'
import Image from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

let ImageItem = s(Image)`
max-width: 300px;
border-radius: 5px;
box-shadow: ${props => props.theme.bs};
margin: 5px;
position: absolute!important;
transition: all 0.3s;

&:hover {
 transform: scale(1.3);
 z-index: 999;
}

 &.image{
  &-0{
    top: 0;
    left: 328px;
  }
  &-1 {
    top: 10px;
    left: 20px;
  }
  &-2 {
    top: 100px;
    left: 160px;
  }
  &-3 {
    top: 20px;
    left: 100px;
  }
}
`

let AboutOuter = s.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'image content';
`

let AboutContent = s.div`
  grid-area: content;
`

let AboutImages = s.div`
  grid-area: image;
  position: relative;
  padding: 50px 0;
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
                fixed(width: 300, height: 200, cropFocus: FACES) {
                  ...GatsbyContentfulFixed
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <AboutOuter>
              <AboutContent>
                <h2>{data.contentfulAbout.title}</h2>
                <p>{data.contentfulAbout.copy.content[0].content[0].value}</p>
              </AboutContent>
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
            </AboutOuter>
          )
        }}
      />
    )
  }
}
