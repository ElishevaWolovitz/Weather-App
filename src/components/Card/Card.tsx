import LocationBar from "../TextBar/index.ts";
import { CardProps } from "./types"; 
import { createUseStyles } from 'react-jss';
import { Styles } from './styles';

const useStyles = createUseStyles(Styles);

const Card = ({ location, temperature, uv, backgroundImg, icon }: CardProps) => {
  const classes = useStyles();
  return (
          <div className={classes.card}>
            <img className={classes.backgroundImage} 
              src={backgroundImg.src}
              alt={backgroundImg.alt} 
            />
            <div className={classes.cardTemp}>
              <h2>{temperature}°C</h2>
              <h4>UV: {uv}</h4>
            </div>
            <div>
              <LocationBar location={location} icon={ icon }/>
            </div>
          </div>  
    )
}

export { Card };