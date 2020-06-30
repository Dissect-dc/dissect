import PropTypes from "prop-types"
import React from "react"
import logo from "../images/dissect-logo.png"
import {Link} from 'gatsby'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    MenuIcon,
    Box,
} from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import MailIcon from '@material-ui/icons/Mail';

class Header extends React.Component {

    render() {

        return (
            <>
                <Box display="flex" justifyContent="flex-end" m={1} p={1}>
                    <Button p={1} href="/" color="inherit">
                        <HomeIcon/>Home
                    </Button>

                    <Button p={1} href="/members" color="inherit">
                        <PeopleIcon/>Members
                    </Button>
                    <Button p={1} href="/apply" color="inherit">
                        <MailIcon/>Apply
                    </Button>
                </Box>
            </>
        )
    }
}

export default Header
