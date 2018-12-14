import React, { Component } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

let HeaderOuter = styled.header`
  height: 40vh;
  width: 100%;
`

export default class ContactHeader extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            contentfulHeader(location: { eq: "Contact" }) {
              headerCopy {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        `}
        render={data => (
          <HeaderOuter>
            <h1>Contact</h1>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  data.contentfulHeader.headerCopy.childMarkdownRemark.html,
              }}
            />
          </HeaderOuter>
        )}
      />
    )
  }
}
