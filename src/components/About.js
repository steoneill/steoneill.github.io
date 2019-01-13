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
  height: 80vh;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

let AboutInner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  padding: 15px;
  display: flex;
  justify-content: space-between;
`

let AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 30px;
  width: 50%;
`

let AboutImages = styled.div`
  position: relative;
  width: 50%;
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
            <section>
              <div>
                <div>
                  {/* {data.contentfulAbout.images.map((image, i) => {
                    return (
                      <ImageItem
                        fixed={image.fixed}
                        className={`image-${i + 1}`}
                        key={image.id}
                      />
                    )
                  })} */}
                </div>
                <div>
                  <h2>{data.contentfulAbout.title}</h2>
                  <p>{data.contentfulAbout.copy.content[0].content[0].value}</p>
                </div>
              </div>
            </section>
          )
        }}
      />
    )
  }
}
