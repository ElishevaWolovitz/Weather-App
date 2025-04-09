import LocationBar from "../LocationBar";
import { CardProps } from "./types"; 
import { getBackgroundImage } from "./functions";


const Card = ({ LocationCardProp, TempCardProp, UVCardProp }: CardProps) => {
  return (
        <>
          <div className={"card"}>
            <img 
              className="card_background" 
              src={getBackgroundImage(TempCardProp)[0]} 
              alt={getBackgroundImage(TempCardProp)[1]} 
            />
            <div className="card_location">
              <h2>{TempCardProp}°C</h2>
            </div>
            <div className="card_temp">
              <h2>UV: {UVCardProp}</h2>
            </div>
            <div>
              <LocationBar LocationLocBarProp={LocationCardProp} TempLocBarProp ={TempCardProp}/>
            </div>
          </div>  
        </>
    )
}

export { Card };