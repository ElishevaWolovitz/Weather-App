import LocationBar from "../LocationBar/index.ts";
import { CardProps } from "./types"; 
import { createUseStyles } from 'react-jss';
import { styles } from './styles';

const useStyles = createUseStyles(styles);

const Card = ({ Location, Temperature, UV, TemperatureArray }: CardProps) => {
  const classes = useStyles();
  return (
        <>
          <div className={classes.card}>
            <img 
              className={classes.backgroundImage} 
              src={TemperatureArray.backgroundImg[0]}
              alt={TemperatureArray.backgroundImg[1]} 
            />
            <div className={classes.cardTemp}>
              <h2>{Temperature}°C</h2>
              <h4>UV: {UV}</h4>
            </div>
            <div>
              <LocationBar Location={Location} TemperatureArray={ TemperatureArray}/>
            </div>
          </div>  
        </>
    )
}

export { Card };