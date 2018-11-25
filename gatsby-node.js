const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  let convertToSlug = (Text) => {
    return Text
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
      ;
  }
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
        console.log(`/${convertToSlug(node.title)}`)
        createPage({
          path: `/${convertToSlug(node.title)}`,
          component: path.resolve(`./src/pages/page.js`),
          context: {
            productId: node.id
          }})
        
      })
      resolve()
    })
  }).catch(error => {
    console.log(error)
    reject()
  })
};