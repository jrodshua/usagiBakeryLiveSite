require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const clientConfig = require("./client-config.js")

module.exports = {
  siteMetadata: {
    title: `Usagi.Bakery, Vegan Bakery`,
    description: `Usagi.Bakery is 100% vegan, with a focus on using ethically sourced and sustainable ingredients.`,
    author: `Josh Rodriguez - @Jrodshua`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price", "Product"],
        secretKey: process.env.GATSBY_STRIPE_SECRET_KEY,
        downloadFiles: true,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        ...clientConfig.sanity,
        graphqlTag: `default`,
        watchMode: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `usagi vegan bakery`,
        short_name: `usagi.bakery`,
        start_url: `/`,
        background_color: `#d7d8da`,
        theme_color: `#f3f3f3`,
        display: `standalone`,
        icon: `src/images/logo.png`,
        icons: [
          {
            src: `src/images/maskable_logo_x48.png`,
            sizes: `48x48`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `src/images/maskable_logo_x72.png`,
            sizes: `72x72`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `src/images/maskable_logo_x96.png`,
            sizes: `96x96`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `src/images/maskable_logo_x128.png`,
            sizes: `128x128`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `src/images/maskable_logo_x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `src/images/maskable_logo_x384.png`,
            sizes: `384x384`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `src/images/maskable_logo_x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `any maskable`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
