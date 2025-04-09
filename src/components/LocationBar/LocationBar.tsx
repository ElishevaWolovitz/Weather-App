import  LocationBarProps from './types';
import getTempIcon from './functions';
import { createUseStyles } from 'react-jss';
import styles from './styles';

// Q: should this go in a different file?
const useStyles = createUseStyles(styles);

const LocationBar = ({ LocationLocBarProp, TempLocBarProp }: LocationBarProps) => {
    const classes = useStyles();
    return (
      <div className={classes.locationBar}>
          <span className={classes.locationText}>{LocationLocBarProp}</span>
          {/*Q: should i have created a const variable for the src and alt so the function is not called here? */}
          <img className={classes.locationIcon} src={getTempIcon(TempLocBarProp)[0]} alt={getTempIcon(TempLocBarProp)[1]} />
      </div>
    );
  };

export { LocationBar };