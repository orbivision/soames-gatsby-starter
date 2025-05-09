require('dotenv').config({ path: `.env.development` });

console.log("GraphQL URL from .env:", process.env.GATSBY_WORDPRESS_URL);

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: 'Soames Gatsby Starter',
  },
  plugins: [
    {
      resolve: 'soames-gatsby-theme',
      options: {
        url: process.env.GATSBY_WORDPRESS_URL,
      },
    },
  ],
};