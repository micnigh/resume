module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Michael Nigh - Resume`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [
          `!**/*page.tsx`
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
  ],
};
