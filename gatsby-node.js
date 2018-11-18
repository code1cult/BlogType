
const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`query {
      allStrapiPost{
       edges {
         node {
           id
           title
            
         }
       }
     }
    }
    `
  ).then(result => {
      console.log(result)
    result.data.allStrapiPost.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve(`./src/pages/page.js`),
        context: {
        productId: node.id
        },
      })
    })
    resolve()
    })
  }).catch(error => {
    console.log(error)
    reject()
  })
};