var config = require('./src/config')

module.exports = (config) => {
  return {
      siteMetadata: {
          title: config.title,
          description: config.title.description,
      },
      plugins: [
          'gatsby-plugin-react-helmet',
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
              resolve: `gatsby-plugin-google-analytics`,
              options: {
                  trackingId:  config.get('googleAnalytics'),
                  head: true,
              },
          },
          {
              resolve: `gatsby-plugin-yandex-metrika`,
              options: {
                  trackingId: config.get('yandexMetrika'),
                  webvisor: true,
                  trackHash: true,
                  version: 2
              },
          },
          'gatsby-plugin-offline',
          {
              resolve: 'gatsby-source-strapi',
              options: {
                  apiURL: config.get('sourceStrapi:apiURL'),
                  contentTypes: config.get('sourceStrapi:contentTypes')
              },
          },

      ],
  }
}
