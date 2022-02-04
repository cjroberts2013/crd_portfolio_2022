module.exports = {
  siteMetadata: {
      title: `Charles Roberts Design`,
    siteUrl: `https://charlesrobertsdesign.com/`,
    description: "I create fast, beautiful, and responsive websites that will get results."
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-postcss", 
    "gatsby-plugin-sitemap",
    'gatsby-plugin-robots-txt',
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", 
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-219562316-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
    {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "static/sm-logo.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};