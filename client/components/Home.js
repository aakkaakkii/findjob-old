import React, {useEffect, useState} from "react";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import VacancyShort from "./ui/VacancyShort";

const Home = () => {
    const classes = useStyles();
    const [vacancies, changeVacancies] = useState([]);

    useEffect(() => {
        let vac = [
            {title: 'Frontend Development', companyName:'Comp 1', date: new Date()},
            {title: 'Full Stack Developer', companyName:'Comp 2', date: new Date()},
            {title: 'Open Source Interactive Developer', companyName:'Comp 1', date: new Date()},
        ];

        changeVacancies(vac);
    }, []);

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} direction="row" justify="center">
                    head
                </Grid>
                <Grid item xs={12}>
                    <Grid container className={classes.about}>
                        <Grid item md={3}>
                            1
                        </Grid>
                        <Grid item md={3}>
                            2
                        </Grid>
                        <Grid item md={3}>
                            3
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item md={2} xs={0}/>
                        <Grid item md={6} xs={12}>
                            {vacancies.map(d => <VacancyShort title={d.title} companyName={d.companyName} date={d.date}/>)}
                        </Grid>
                        <Grid item md={4} xs={12}>
                            2
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    about: {
        backgroundColor: '#6c63ff',
        padding: '50px 50px'
    }
}));

export default Home;
