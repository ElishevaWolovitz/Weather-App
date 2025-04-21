import { LocationBarProps } from "./types";
import { createUseStyles } from 'react-jss';
import { styles } from './styles';

const useStyles = createUseStyles(styles);

const LocationBar = ({Location, Icon}: LocationBarProps) => {
    const classes = useStyles();
    return (
      <div className={classes.locationBar}>
          <span className={classes.locationText}>{Location}</span>
          <img className={classes.locationIcon} src={Icon.src} alt={Icon.alt} />
      </div>
    );
  };

export { LocationBar };