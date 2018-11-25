const config = require('./src/config/config.json')
const path = require(`path`);
const axios = require('axios');
const cron = require('node-cron');
const id = require('./src/id.json');
const jsonfile = require('jsonfile');
const file = './src/config/config.json';

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  let getReq  = async () => {
    const fetchRandomUser = () => axios.get('http://54.174.47.171:9000/api/resources/id.id id?_id='+id.id);
    const res = await fetchRandomUser();
    console.log('sourceNodes')
    console.log(res.data)

    let indexData = res.data
    jsonfile.writeFile(file, indexData, function (err) {
      if (err) console.error(err)
    })
  }

  cron.schedule('* */23 * * *', () => {
    console.log('running every 23 hour');
    getReq ()

  });

}


exports.createPages = ({ graphql, boundActionCreators }) => {

  console.log('config')
  console.log(config)
  const { createPage } = boundActionCreators

  let convertToSlug = (Text) => {
    return Text
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
      ;
  }

  console.log('exports.createPages')
  console.log(config.sourceStrapi.allStrapi)


  return new Promise((resolve, reject) => {
    graphql(`query {`+
    config.sourceStrapi.allStrapi+`{
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
      result.data[config.sourceStrapi.allStrapi].edges.forEach(({ node }) => {
        console.log(`/${convertToSlug(node.title)}`)
        createPage({
          path: `/${convertToSlug(node.title)}`,
          component: path.resolve(`./src/pages/page.js`),
          context: {
            productId: node.id
          }
        })

      })

      resolve()
    })
  }).catch(error => {
    console.log(error)
    reject()
  })
};