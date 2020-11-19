import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item md={3} xs={0}/>
                <Grid item md={2} xs={12}>
                    <stan className={classes.title}>About</stan>
                </Grid>
                <Grid item md={2} xs={12}>
                    <stan className={classes.title}>Workers</stan>
                </Grid>
                <Grid item md={2} xs={12}>
                    <stan className={classes.title}>Have a Questions?</stan>
                </Grid>
                <Grid item md={3} xs={0}/>
            </Grid>
            <Grid container>
                <Grid item xs={12} className={classes.copyright}>
                    <span >Copyright ©2020 All rights reserved </span>
                </Grid>
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#000000',
        marginTop: '10px',
        padding:'40px 0'
    },
    title: {
        fontSize: '20px',
        color: 'white'
    },
    copyright: {
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'center',
        paddingTop: '25px'
    }
}));


export default Footer;
