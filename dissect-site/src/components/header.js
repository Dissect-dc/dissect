import PropTypes from "prop-types"
import React from "react"
import {Div, Image, Container, Anchor, scrollTo, Icon} from "atomize"
import logo from "../images/dissect-logo.png"
import {Link} from 'gatsby'

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showMobileHeaderMenu: false,
        }
    }

    toggleHeaderMenu = value => {
        this.setState({showMobileHeaderMenu: value})

        setTimeout(() => {
            window.scrollTo(0, window.scrollY + 1)
        }, 400)
    }

    render() {
        const {showMobileHeaderMenu} = this.state

        return (
            <>
                <Div
                    tag="header"
                    pos="static"
                    top="0"
                    transition
                    left="0"
                    right="0"
                    zIndex="100"
                    p={{y: {xs: "1.5rem", md: "1rem"}}}
                >
                    <Div
                        pos="absolute"
                        top="0"
                        left="0"
                        right="0"
                        bottom="0"
                        bg="white"
                        opacity="1"
                        zIndex="-1"
                    ></Div>
                    <Container d="flex" align="center" justify="space-between">
                        <Div cursor="pointer">
                            <Image
                                src={logo}
                                alt="atomize design system logo"
                                h="80px"
                                w="auto"
                            />
                        </Div>

                        {/* Icon For Mobile */}

                        <Div
                            d={{xs: "flex", md: "none"}}
                            flexDir="column"
                            onClick={() => this.toggleHeaderMenu(!showMobileHeaderMenu)}
                        >
                            <Div
                                h="2px"
                                w="1rem"
                                bg="black"
                                rounded="lg"
                                style={{
                                    transform: `translateY(${
                                        showMobileHeaderMenu ? "1" : "-2"
                                    }px)rotate(${showMobileHeaderMenu ? "135" : "0"}deg)`,
                                }}
                                transition
                            ></Div>
                            <Div
                                h="2px"
                                w="1rem"
                                bg="black"
                                rounded="lg"
                                style={{
                                    transform: `translateY(${
                                        showMobileHeaderMenu ? "-1" : "2"
                                    }px)rotate(${showMobileHeaderMenu ? "45" : "0"}deg)`,
                                }}
                                transition
                            ></Div>
                        </Div>

                        {/* Links for Desktop */}
                        <Div
                            d="flex"
                            onClick={() => this.toggleHeaderMenu(false)}
                            bg={{xs: "white", md: "transparent"}}
                            align={{xs: "strech", md: "center"}}
                            flexDir={{xs: "column", md: "row"}}
                            pos={{xs: "absolute", md: "static"}}
                            p={{
                                t: {xs: "6rem", md: "0"},
                                b: {xs: "2rem", md: "0"},
                                x: {xs: "1.5rem", md: "0"},
                            }}
                            top="0"
                            left="0"
                            right="0"
                            zIndex={{xs: "-1", md: "0"}}
                            shadow={{xs: "4", md: "0"}}
                            opacity={{
                                xs: showMobileHeaderMenu ? "1" : "0",
                                md: "1",
                            }}
                            transform={{
                                xs: `translateY(${showMobileHeaderMenu ? "0" : "-100%"})`,
                                md: "none",
                            }}
                            transition
                        >
                            <Anchor
                                m={{r: "2rem", b: {xs: "1rem", md: "20"}}}
                                textWeight="500"
                                textColor="medium"
                                hoverTextColor="black"
                                transition
                            >
                                <Link to="/">
                                    <Icon t name="Home" color="black" size="15px"/>
                                    Home
                                </Link>
                            </Anchor>

                            <Anchor
                                m={{r: "2rem", b: {xs: "1rem", md: "20"}}}
                                textWeight="500"
                                textColor="medium"
                                hoverTextColor="black"
                                transition
                            >
                                <Link to="/members">
                                    <Icon name="User" color="black" size="15px"/>
                                    Members
                                </Link>
                            </Anchor>

                            <Anchor
                                m={{r: "2rem", b: {xs: "1rem", md: "20"}}}
                                textWeight="500"
                                textColor="medium"
                                hoverTextColor="black"
                                transition
                                onClick={() => scrollTo("")}
                            >
                                <Link to="/apply">
                                    <Icon name="Mail" color="black" size="15px"/>
                                    Application
                                </Link>
                            </Anchor>
                        </Div>
                    </Container>
                </Div>
            </>
        )
    }
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
