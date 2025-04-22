import LocationBar from "../TextBar/index.ts";
import { CardProps } from "./types"; 
import { createUseStyles } from 'react-jss';
import { styles } from './styles';

const useStyles = createUseStyles(styles);

const Card = ({ Location, Temperature, UV, BackgroundImg, Icon }: CardProps) => {
  const classes = useStyles();
  return (
          <div className={classes.card}>
            <img className={classes.backgroundImage} 
              src={BackgroundImg.src}
              alt={BackgroundImg.alt} 
            />
            <div className={classes.cardTemp}>
              <h2>{Temperature}°C</h2>
              <h4>UV: {UV}</h4>
            </div>
            <div>
              <LocationBar Location={Location} Icon={ Icon }/>
            </div>
          </div>  
    )
}

export { Card };