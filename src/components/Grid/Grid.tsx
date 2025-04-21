import { createUseStyles } from 'react-jss';
import {styles} from './styles';
import { cardData } from './const.ts';
import { CardDataProps } from './types.ts';
import Card from '../Card/index.ts';
import { map } from 'lodash/fp';
import { getTemperatureArray } from "../../functions.ts";

const useStyles = createUseStyles(styles);

const Grid = () => {
    const classes = useStyles();

    const createCard = (cardData: CardDataProps) => {
        const temperatureDetails = getTemperatureArray(cardData.Temperature);
        return (
            <Card 
            Location={cardData.Location}
            Temperature={cardData.Temperature}
            UV={cardData.UV}
            TemperatureArray={temperatureDetails}
            /> 
        )
    }
    const cards = map(createCard)(cardData)
    
    return (
        <>
            <div className={classes.gridHeader}>
                <h1>Weather</h1>
            </div>
            <div className={classes.grid}> 
                {cards} 
            </div>

        </>
    )
}

export { Grid };
