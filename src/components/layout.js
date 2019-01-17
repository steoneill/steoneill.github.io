import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
// import Navbar from './Navbar'

let Light = {
  primary: '#F6207C',
  black: '#454647',
  maxWidth: '1200px',
  primaryFont: `'Montserrat', sans-serif`,
  secondaryFont: `'Poppins', sans-serif`,

  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  bsPink: '0 12px 24px 0 RGBA(246, 32, 124, 100)',
  headerBackground: '#ffffff',
}

let Global = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    color: ${Light.black};
    font-family: ${Light.primaryFont};
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
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
            {
              name: 'keywords',
              content:
                'javascript, developer, leeds, Leeds, england, web developer, node, react, react.js, node.js',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={Light}>
          <Fragment>
            {console.log(
              '%c Hey kid. Wanna see something COOL?? npx steoneill',
              'background: #fff; color: #F6207C'
            )}
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
