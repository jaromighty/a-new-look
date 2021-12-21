/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "A New Look Restorations and Janitorial Services",
    description: "A restoration and janitorial service small business serving Daytona Beach and surrounding locations.",
    siteUrl: "https://anlrestorations.com",
    author: "",
    facebookPage: "https://www.facebook.com/ANewLookCarpetCleaning",
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query:`{
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: () => "https://anlrestorations.com",
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      },
    }
  ],
}
