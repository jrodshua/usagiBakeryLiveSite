async function createBlogAndStorePages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(sort: { order: DESC, fields: publishedAt }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
      allStripeProduct(
        filter: { active: { eq: true } }
        sort: { order: DESC, fields: created }
      ) {
        edges {
          node {
            id
            name
            metadata {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const blogEdges = (result.data.allSanityPost || {}).edges || []
  const storeEdges = (result.data.allStripeProduct || {}).edges || []

  blogEdges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `/blog/${slug}/`

    createPage({
      path,
      component: require.resolve("./src/templates/blog.js"),
      context: { id },
    })
  })
  storeEdges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.metadata.slug
    const path = `/store/${slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/store.js"),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogAndStorePages(graphql, actions)
}
