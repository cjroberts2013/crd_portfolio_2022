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
    "gatsby-transformer-sharp", {
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