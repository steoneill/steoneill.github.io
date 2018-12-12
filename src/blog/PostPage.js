import React, { Component } from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import styled from 'styled-components'

let BlogHeader = styled.header`
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`

let BlogImage = styled(Img)`
  width: 100vh;
  position: initial !important;
`

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
            <BlogImage fluid={data.contentfulBlogPost.headerImage.fluid} />
          </BlogHeader>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
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
