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
    services: [
      { 
        name: "Carpet, furniture, tile, and floor cleaning", 
        description: "We all know things get dirty. It’s a fact of life. Floors and furniture seem to often take pretty hard hits when it comes to cleanliness. Have you checked your couch for crumbs lately? Any type of material needs to be cleaned on a regular basis. Unfortunately, the longer you wait, the worse it gets. Dirt and grime work their way into that material over time and become harder to clean. Repetition is key to having clean floors and furniture. We recommend that your carpet, furniture, and tile be cleaned at least twice a year."
      },
      { 
        name: "24-hour emergency water damage restoration",
        description: "Emergency water damage can take different forms. You never know when it could happen. And you can only be so prepared. Here in Florida, these emergencies generally come in the form of hurricanes and tropical storms. Carpet, due to its location on the floor, gets saturated. When this happens, getting your carpets taken care of sooner will avoid having to replace them. Either the padding will need to be removed or the carpet simply dried. The type of damage determines which treatment is chosen. We aim to offer quick response times and make our restoration process as cost efficient as possible for you."
      },
      { 
        name: "Complete home/office remodeling and floor installation",
        description: "In the unfortunate event that more than your carpet endures damage, we also offer restorative services to get your home or office back into working condition. We began taking on more restoration services when we found that subcontractors were giving cheap service. Our goal is to help you as quickly as we can while giving you cost-efficient quality service."
      },
    ],
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
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '2',
        matomoUrl: 'https://analytics.jarom.dev',
        siteUrl: 'https://anlrestorations.com'
      }
    },
  ],
}
