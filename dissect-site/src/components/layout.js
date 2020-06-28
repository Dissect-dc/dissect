import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"
import "./font.css"

import {StyleReset} from "atomize"
import {ThemeProvider, defaultTheme} from "gw2-ui";

const theme = {
    fontFamily: {
        primary:
            '"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        secondary:
            '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        code: "'Fira Mono','Roboto Mono', monospace",
    },
    grid: {
        containerMaxWidth: {
            xl: "1184px",
        },
    },
    textSize: {
        size: {
            display3: "48px",
        },
        height: {
            display3: "56px",
        },
    },
    colors: {
        brandgray: "#F7F5F4",
    },
}

class Layout extends React.Component {
    render() {
        const {children} = this.props

        return (
            <StaticQuery
                query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
                render={data => (
                    <ThemeProvider theme={defaultTheme}>
                        <StyleReset/>
                        <div tag="main">
                            {children}
                        </div>
                    </ThemeProvider>
                )}
            />
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout