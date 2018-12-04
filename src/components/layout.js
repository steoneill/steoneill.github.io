import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Header from './header'

let Light = {
  primary: '#F6207C',
  black: '#333333',
  maxWidth: '1200px',
  primaryFont: `'Montserrat', sans-serif`,
  secondaryFont: `'Playfair Display', serif`,
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  bsPink: '0 12px 24px 0 RGBA(246, 32, 124, 100)',
  headerBackground: '#ffffff',
}

let Dark = {
  primary: 'red',
  black: '#333333',
  maxWidth: '1200px',
  primaryFont: `'Montserrat', sans-serif`,
  secondaryFont: `'Playfair Display', serif`,
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  bsPink: '0 12px 24px 0 RGBA(246, 32, 124, 100)',
  headerBackground: '#5F53FD',
}

let themeSelection = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches === false) {
    return Light
  } else {
    return Dark
  }
}

let Global = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    color: ${themeSelection().black};
    font-family: ${themeSelection().primaryFont};
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: `Hi, My name's Ste! I'm a full stack Javascript developer, based in Leeds. I'm currently available for freelance work in GraphQL, React and Node.`,
            },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={themeSelection()}>
          <Fragment>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Global />
            {children}
          </Fragment>
        </ThemeProvider>
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
