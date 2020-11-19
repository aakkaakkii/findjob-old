import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const VacancyShort = ({title, companyName, date}) => {
    const classes = useStyles();

    console.log(date)

    return (
        <div className={classes.root}>
            <div className={classes.title}>{title}</div>
            <div>
                <span className={classes.companyName}>{companyName}</span>
                <span>{date.toString()}</span>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingBottom: '15px',
        borderBottom: '1px solid #6c63ff'
    },
    title: {
        fontSize: '28px',
        margin: '20px 0 10px 0'
    },
    companyName: {
        color: '#6c63ff',
        marginRight: '5px'
    },
}));


export default VacancyShort;
