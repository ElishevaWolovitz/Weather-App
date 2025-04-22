import { createUseStyles } from 'react-jss';
import {Styles} from './styles';
import { CardData } from './const.ts';
import { CardDataProps } from './types.ts';
import Card from '../Card/index.ts';
import { map } from 'lodash/fp';
import { getTemperatureObj } from "../../functions.ts";

const useStyles = createUseStyles(Styles);

const Grid = () => {
    const classes = useStyles();

    const createCard = (cardData: CardDataProps) => {
        const temperatureDetails = getTemperatureObj(cardData.temperature);
        return (
            <Card 
            location={cardData.location}
            temperature={cardData.temperature}
            uv={cardData.uv}
            backgroundImg={temperatureDetails.backgroundImg}
            icon ={temperatureDetails.icon}
            /> 
        )
    }
    const cards = map(createCard)(CardData)
    
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
