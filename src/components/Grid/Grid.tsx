//import React from 'react'
import { Card } from '../Card/Card.tsx'; 
import { createUseStyles } from 'react-jss';
import styles from './styles';


// should these two consts be in this file?
const useStyles = createUseStyles(styles);

const cardData = [
    { LocationCardProp: "Tel Aviv", TempCardProp: 25, UVCardProp: 8 },
    { LocationCardProp: "Johannesburg", TempCardProp: 6, UVCardProp: 4 },
    { LocationCardProp: "Antarctica", TempCardProp: -5, UVCardProp: 0 },
    { LocationCardProp: "Texas", TempCardProp: 31, UVCardProp: 12 },
  ];


const Grid = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.gridHeader}>
                <h1>Weather</h1>
            </div>
            <div className={classes.grid}>
                {cardData.map((card, index) => (
                <Card
                    key={index} 
                    LocationCardProp={card.LocationCardProp}
                    TempCardProp={card.TempCardProp}
                    UVCardProp={card.UVCardProp}
                />
                ))}
            </div>
        </>
    )
}

export { Grid };
