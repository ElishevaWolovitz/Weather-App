import { TextBarProps } from "./types";
import { createUseStyles } from 'react-jss';
import { Styles } from './styles';

const useStyles = createUseStyles(Styles);

const TextBar = ({location, icon}: TextBarProps) => {
    const classes = useStyles();
    return (
      <div className={classes.textBar}>
          <span className={classes.textBarText}>{location}</span>
          <img className={classes.textBarIcon} 
            src={icon.src} 
            alt={icon.alt} 
          />
      </div>
    );
  };

export { TextBar };