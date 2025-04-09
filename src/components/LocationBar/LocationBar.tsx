import  LocationBarProps from './types';
import getTempIcon from './functions';

const LocationBar = ({ LocationLocBarProp, TempLocBarProp }: LocationBarProps) => {
    //Variable to store the image source based on the temperature
    let imageSrc = getTempIcon(TempLocBarProp)[0];
    let altText = getTempIcon(TempLocBarProp)[1];
    return (
      <div>
        {/* Render the location name and corresponding icon image */}
        <h1>
          {LocationLocBarProp}
          <img src={imageSrc} alt={altText} />
        </h1>
      </div>
    );
  };

export { LocationBar };