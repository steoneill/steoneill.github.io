import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Header from './header'

let Theme = {
  primary: '#F6207C',
  black: '#333333',
  primaryFont: `'Montserrat', sans-serif`,
  secondaryFont: `'Playfair Display', serif`,
}

let Global = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    color: ${Theme.black};
    font-family: ${Theme.primaryFont};
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
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={Theme}>
          <Fragment>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Global />
            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
              }}
            >
              {children}
            </div>
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
