import LocationBar from "../LocationBar";
import { CardProps } from "./types"; 
import { getBackgroundImage } from "./functions";
import { createUseStyles } from 'react-jss';
import styles from './styles';

// should this go in a different file?
const useStyles = createUseStyles(styles);

const Card = ({ LocationCardProp, TempCardProp, UVCardProp }: CardProps) => {
  const classes = useStyles();
  return (
        <>
          <div className={classes.card}>
            <img 
              className={classes.backgroundImage} 
              src={getBackgroundImage(TempCardProp)[0]} 
              alt={getBackgroundImage(TempCardProp)[1]} 
            />
            <div className={classes.cardTemp}>
              <h2>{TempCardProp}°C</h2>
              <h4>UV: {UVCardProp}</h4>
            </div>
            <div>
              <LocationBar LocationLocBarProp={LocationCardProp} TempLocBarProp ={TempCardProp}/>
            </div>
          </div>  
        </>
    )
}

export { Card };