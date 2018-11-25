import config from './src/config'
const path = require(`path`);
const axios = require('axios');
const cron = require('node-cron');
const id = require('./src/id.json');
const jsonfile = require('jsonfile');
const file = './src/config/config.json';


exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;


console.log(id.id)


  let getReq  = async () => {
    //const fetchRandomUser = () => axios.get('http://54.174.47.171:9000/api/resources/'+id.id);
    const fetchRandomUser = () => axios.get('http://54.174.47.171:9000/api/resources/');
    const res = await fetchRandomUser();
    console.log('sourceNodes')
    console.log(res.data[0])

    let indexData = res.data[0]
    jsonfile.writeFile(file, indexData, function (err) {
      if (err) console.error(err)
    })
  }

  // cron.schedule('* */23 * * *', () => {
  //   console.log('running every 23 hour');
  //   getReq ()

  // });

  cron.schedule('*/1 * * * *', () => {
    console.log('running a task every two minutes');
    getReq ()
  });




}


exports.createPages = ({ graphql, boundActionCreators }) => {

  const { createPage } = boundActionCreators

  let convertToSlug = (Text) => {
    return Text
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
      ;
  }
  return new Promise((resolve, reject) => {
    graphql(`query {`+
        config.get("sourceStrapi")`{
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
      result.data[config.get("sourceStrapi:allStrapi")].edges.forEach(({ node }) => {
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