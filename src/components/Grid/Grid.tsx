//import React from 'react'
import { Card } from '../Card/Card.tsx'; 
import { createUseStyles } from 'react-jss';
import styles from './styles';


// should this be in this file?
const useStyles = createUseStyles(styles);

const Grid = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.gridHeader}>
                <h1>Weather</h1>
            </div>
        {/* I know there is a better logical way to do this and to use API as apose static mock data - will come back to this if time */}
          <div className={classes.grid}>
            <Card LocationCardProp="Tel Aviv" TempCardProp={25} UVCardProp={8}/>
            <Card LocationCardProp="Johannesburg" TempCardProp={6} UVCardProp={4}/>
            <Card LocationCardProp="Antarctica" TempCardProp={-5} UVCardProp={0}/>
            <Card LocationCardProp="Texas" TempCardProp={31} UVCardProp={12}/>
          </div>
        </>
    )
}

export { Grid };
