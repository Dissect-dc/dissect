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
                <Box display="flex" justifyContent="flex-end">
                    <Button color="inherit">
                        <Link className="nolink" to="/">
                            <HomeIcon/>Home
                        </Link>
                    </Button>

                    <Button color="inherit">
                        <Link className="nolink" to="/members">
                            <PeopleIcon/>Members
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link className="nolink" to="/apply">
                            <MailIcon/>Apply
                        </Link>
                    </Button>
                </Box>
            </>
        )
    }
}

export default Header
