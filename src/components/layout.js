import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"

import {ThemeProvider, defaultTheme} from "gw2-ui";

import 'typeface-menomonia'
import "../pages/global.css"
import "../utils/normalize.css"
const style = {
};

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
                        <div style={style}>
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
