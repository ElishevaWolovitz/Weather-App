import { TextBarProps } from "./types";
import { createUseStyles } from 'react-jss';
import { styles } from './styles';

const useStyles = createUseStyles(styles);

const TextBar = ({Location, Icon}: TextBarProps) => {
    const classes = useStyles();
    return (
      <div className={classes.textBar}>
          <span className={classes.textBarText}>{Location}</span>
          <img className={classes.textBarIcon} src={Icon.src} alt={Icon.alt} />
      </div>
    );
  };

export { TextBar };