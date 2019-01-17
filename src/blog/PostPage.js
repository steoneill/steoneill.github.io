import React, { Component } from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { graphql } from 'gatsby'

let BlogHeader = styled.header`
  height: 40vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`

let BlogContent = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  background: white;
`

// let BlogImage = styled(Img)`
//   width: 100%;
// `

let BlogTitle = styled.h1`
  color: white;
  z-index: 10;
`

export default class PostPage extends Component {
  render() {
    const { data } = this.props
    if (!data) return null
    return (
      <Layout>
        <div>
          <BlogHeader>
            <BlogTitle>{data.contentfulBlogPost.title}</BlogTitle>
            <Img
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              fluid={data.contentfulBlogPost.headerImage.fluid}
            />
          </BlogHeader>
          <BlogContent
            dangerouslySetInnerHTML={{
              __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          timeToRead
          html
        }
      }
      headerImage {
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      slug
      id
    }
  }
`
