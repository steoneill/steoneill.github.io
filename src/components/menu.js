import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Menu = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulMenuItem {
          edges {
            node {
              id
              title
              link
            }
          }
        }
      }
    `}
    render={data => {
      let menuItems = data.allContentfulMenuItem.edges
      console.log(menuItems)
      return (
        <Fragment>
          {menuItems.length > 0 &&
            menuItems.map(item => <p>{item.node.title}</p>)}
        </Fragment>
      )
    }}
  />
)
export default Menu
