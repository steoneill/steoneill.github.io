import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import AboutShape from '../images/AboutShape.svg'
import { Trail, Spring } from 'react-spring'
import TickImage from '../images/tick.svg'

let ImagesOuter = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(17, 1fr);
  grid-gap: 10px;
  transform: rotate(-15deg);
`

let ImageItem = styled(Image)`
  border-radius: 5px;
  box-shadow: ${props => props.theme.bs};

  &.image {
    &-e048b881-e14c-5796-afec-9f0811d2a0df {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 6;
    }

    &-169eae70-7294-51eb-97d4-e172a4564244 {
      grid-column-start: 4;
      grid-column-end: 7;
      grid-row-start: 2;
      grid-row-end: 8;
    }

    &-9e4e0634-6313-5aeb-913c-23e96a9c3fc7 {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 6;
      grid-row-end: 12;
    }

    &-c0c028ff-10d5-5ac7-91cb-d44ae59c2b1f {
      grid-column-start: 4;
      grid-column-end: 7;
      grid-row-start: 8;
      grid-row-end: 14;
    }
  }
`

let AboutOuter = styled.section`
  display: flex;
  justify-content: center;
  justify-items: center;
  position: relative;
  z-index: 1;
  height: auto;
  box-sizing: border-box;
  flex-direction: row;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`

let AboutInner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  padding: 90px 15px;
  margin-bottom: 120px;
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    overflow: hidden;
  }
`
let AboutContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`
let AboutImages = styled.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`

let AboutTitle = styled.h2``

let AboutCopy = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ul {
    padding: 20px 40px;
    li {
      padding: 10px;
    }
  }
`

let AboutShapeOuter = styled.object`
  width: 100%;
  z-index: -1;
  position: absolute;
  top: 0px;
  left: -410px;

  @media screen and (max-width: 1024px) {
    top: -200px;
  }
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
                childMarkdownRemark {
                  html
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
                    <Trail
                      items={data.contentfulAbout.images}
                      keys={image => image.id}
                      from={{
                        transform: 'translate3d(0,400px,0)',
                        opacity: 0,
                      }}
                      to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
                    >
                      {image => ({ transform, opacity }) => (
                        <Fragment>
                          <ImageItem
                            fluid={image.fluid}
                            key={image.id}
                            className={`image-${image.id}`}
                            style={{ transform, opacity }}
                          />
                        </Fragment>
                      )}
                    </Trail>
                  </ImagesOuter>
                  <Spring
                    delay={1500}
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                  >
                    {({ opacity }) => (
                      <AboutShapeOuter style={{ opacity }}>
                        <AboutBackground />
                      </AboutShapeOuter>
                    )}
                  </Spring>
                </AboutImages>
                <Spring delay={1500} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {({ opacity }) => (
                    <AboutContent style={{ opacity }}>
                      <AboutTitle>{data.contentfulAbout.title}</AboutTitle>
                      <AboutCopy
                        dangerouslySetInnerHTML={{
                          __html:
                            data.contentfulAbout.copy.childMarkdownRemark.html,
                        }}
                      />
                    </AboutContent>
                  )}
                </Spring>
              </AboutInner>
            </AboutOuter>
          )
        }}
      />
    )
  }
}
