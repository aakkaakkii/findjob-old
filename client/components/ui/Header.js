import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolBar} >
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.navbarLink} to="/"> Find Job</Link>
                    </Typography>
                    <Typography>
                        <Link className={classes.navbarLink} to="/about">About</Link>
                        <Link className={classes.navbarLink} to="/login">Login</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>

    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        color: 'black'
    },
    toolBar: {
        backgroundColor: 'white'
    },
    navbarLink: {
        color: 'black',
        textDecoration: 'none',
        margin: '5px 5px'
    }

}));

export default Header;
