import config from './scr/index.json'

module.exports = {
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
