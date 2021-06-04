module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: `WebDev Portfolio`,
    description: `Awesome WebDev Portfolio built with Gatsbt and Strapi`,
    titleTemplate: `%s | WebDev Portfolio`,
    url: `https://allen-portfolio.netlify.app`,
    image: `/main.png`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`job`, `project`],
        singleTypes: [`about`],
      },
    },
  ],
}
