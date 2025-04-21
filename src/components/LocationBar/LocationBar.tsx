import { LocationBarProps } from "./types";
import { createUseStyles } from 'react-jss';
import { styles } from './styles';

const useStyles = createUseStyles(styles);

const LocationBar = ({Location, TemperatureObj}: LocationBarProps) => {
    const classes = useStyles();
    return (
      <div className={classes.locationBar}>
          <span className={classes.locationText}>{Location}</span>
          <img className={classes.locationIcon} src={TemperatureObj.icon.src} alt={TemperatureObj.icon.alt} />
      </div>
    );
  };

export { LocationBar };