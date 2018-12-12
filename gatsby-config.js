require('dotenv').config()
// path: `.env.${process.env.NODE_ENV}`

module.exports = {
  siteMetadata: {
    title: `Ste O'Neill | Full Stack Web Developer`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: `${process.env.CONTENTFUL_PREVIEW_TOKEN}`,
        host: `preview.contentful.com`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    '@contentful/gatsby-transformer-contentful-richtext',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Playfair Display`,
          `Montserrat\:300,400,400i,700`, // you can also specify font weights and styles
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
