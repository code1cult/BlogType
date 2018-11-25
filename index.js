var cmd = require('node-cmd');
const jsonfile = require('jsonfile');
const config = require('./src/config/config.json')
const file = './gatsby-config.js';


let obj = {
    siteMetadata: {
        title: config.title,
        description: config.title.description,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: config.googleAnalytics,
                head: true,
            },
        },
        {
            resolve: `gatsby-plugin-yandex-metrika`,
            options: {
                trackingId: config.yandexMetrika,
                webvisor: true,
                trackHash: true,
                version: 2
            },
        },
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: config.sourceStrapi.apiURL,
                contentTypes: config.sourceStrapi.contentTypes
            },
        },

    ],
}



let str = JSON.stringify(obj)
let final = 'module.exports = {' + str + '}';
jsonfile.writeFile(file, JSON.parse(str), function (err) {
    if (err) console.error(err)
})





