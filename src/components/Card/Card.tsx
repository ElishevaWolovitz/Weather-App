import Tempreture  from "../Tempreture";
import UV from "../UV";
import LocationBar from "../LocationBar";
import { CardProps } from "./types"; 
import { getBackgroundImage } from "./functions";


const Card = ({ LocationCardProp, TempCardProp }: CardProps) => {
  return (
        <>
          <div className="card">
            <img className="background_image" src={getBackgroundImage(TempCardProp)[0]} alt={getBackgroundImage(TempCardProp)[1]} />
            <div className="card_temp">
              <h2>{TempCardProp}</h2>
            </div>
            <div className="card_uv">
              <UV />
            </div>
            <div className="card__location">
              <LocationBar LocationLocBarProp={LocationCardProp} TempLocBarProp ={TempCardProp}/>
            </div>
          </div>  
        </>
    )
}

export { Card };