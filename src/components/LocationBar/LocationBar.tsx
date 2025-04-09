import  LocationBarProps from './types';
import getTempIcon from './functions';

const LocationBar = ({ LocationLocBarProp, TempLocBarProp }: LocationBarProps) => {
    return (
      <div>
        {/* Render the location name and corresponding icon image */}
        <h1>
          {LocationLocBarProp}
          <img src={getTempIcon(TempLocBarProp)[0]} alt={getTempIcon(TempLocBarProp)[1]} />
        </h1>
      </div>
    );
  };

export { LocationBar };