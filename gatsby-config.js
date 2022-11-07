require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "RTG Photography",
    description: "RTG Photography",
    author: "Shaun Gedye",
    siteUrl: "https://rtgphotography.com.au",
  },
  trailingSlash: "never",
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["GTM-KB2H6J8", "G-GXWD73FTJS", "G-083XKWRXPW"],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-google-photos",
      options: {
        clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
        albumsTitles: [
          "chin-state",
          "colombia",
          "cuba",
          "ethiopia",
          "madagascar",
          "myanmar",
          "phnom-penh",
          "sri-lanka",
          "tokyo",
          "yangon",
          "assorted",
        ],
        photosMaxWidth: 1200,
        photosMaxHeight: 1200,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-svg",
    "gatsby-plugin-linaria", // linaria must come after typescript
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/content/branding/favicon.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
};
