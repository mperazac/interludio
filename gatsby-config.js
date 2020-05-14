const cfg = {
  pathPrefix: `/gatsby-starter-hyperspace/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'Interludio Costa Rica',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Interludio Costa Rica',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/logo_favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'HASURA',
        fieldName: 'hasura',
        url: `https://interludio-information.herokuapp.com/v1/graphql`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};

if (process.env.CONTEXT === 'production') {
  const googleAnalyticsCfg = {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-37317421-1',
    },
  };
  cfg.plugins.push(googleAnalyticsCfg);
}

module.exports = cfg;
