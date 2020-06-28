import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"
import "./font.css"
// import "./wow.css"

import {StyleReset, ThemeProvider, Div} from "atomize"
import {Provider} from "react-redux";
import createStore from "../things/createStore";
import {Gw2ThemeProvider} from "gw2-ui-components";

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
                    <Provider store={createStore()}>
                        <Gw2ThemeProvider>
                            <ThemeProvider theme={theme}>
                                <StyleReset/>
                                <Div tag="main">
                                    {children}
                                </Div>
                            </ThemeProvider>
                        </Gw2ThemeProvider>
                    </Provider>
                )}
            />
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
