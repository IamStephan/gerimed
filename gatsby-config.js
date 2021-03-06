module.exports = {
  siteMetadata: {
    title: "Gerimed",
    titleTemplate: "%s | Private Elderly Care",
    description:
      "Gerimed is a privatly owned elderly care business located in Langebaan and Kleinmond",
    siteUrl: `https://gerimed.co.za/`,
  },
  plugins: [
    "gatsby-plugin-preact",
    "gatsby-plugin-tsconfig-paths",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#d32f2f`,
        showSpinner: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images",
      },
      __key: "images",
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
  ],
}
