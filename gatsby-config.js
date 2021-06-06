module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: `Allen WebDev Portfolio`,
    description: `Awesome Allen Portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s | Allen Portfolio`,
    url: `https://allenlin.me`,
    image: `/main.png`,
  },

  plugins: [
    `gatsby-plugin-sass`,
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
        apiURL: `https://allenlin-portfolio.herokuapp.com`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`job`, `project`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
