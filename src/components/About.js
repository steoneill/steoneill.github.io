import React, { Component } from 'react'
import s from 'styled-components'
import Image from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

let ImageItem = s(Image)`
max-width: 400px;
border-radius: 5px;

`

let AboutOuter = s.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'image content';
`

let AboutContent = s.div`
  grid-area: content;
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
                fluid(maxWidth: 500) {
                  ...GatsbyContentfulFluid_tracedSVG
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
                {data.contentfulAbout.images.map(image => {
                  return <ImageItem fluid={image.fluid} />
                })}
              </AboutContent>
            </AboutOuter>
          )
        }}
      />
    )
  }
}
