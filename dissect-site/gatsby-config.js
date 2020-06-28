module.exports = {
    siteMetadata: {
        title: `Dissect [Dc]`,
        description: `The official website for the hardcore fractal guild Dissect [Dc].`,
        author: `@spatiumprinceps`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
        {
            resolve: "gatsby-plugin-styletron",
            options: {
                // You can pass options to Styletron.
                // Prefix all generated classNames:
                prefix: "_"
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/guides`,
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: ["gatsby-remark-component"]
            }
        },
        `gatsby-remark-component`,
    ],
}
