const path = require('path')

//the framework for creating pages based on the contentful blog post type.. unneeded for now. Would like to turn to async/await when needed.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
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
