import { LocationBarProps } from "./types";
import { createUseStyles } from 'react-jss';
import { styles } from './styles';

const useStyles = createUseStyles(styles);

const LocationBar = ({Location, TemperatureArray}: LocationBarProps) => {
    const classes = useStyles();
    return (
      <div className={classes.locationBar}>
          <span className={classes.locationText}>{Location}</span>
          <img className={classes.locationIcon} src={TemperatureArray.icon[0]} alt={TemperatureArray.icon[1]} />
      </div>
    );
  };

export { LocationBar };