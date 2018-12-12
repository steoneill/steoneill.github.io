const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          path: '/blog/' + node.slug,
          component: path.resolve('./src/blog/PostPage.js'),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
}
