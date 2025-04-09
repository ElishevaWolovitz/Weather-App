import Tempreture  from "../Tempreture";
import UV from "../UV";
import LocationBar from "../LocationBar";
import { CardProps } from "./types"; 


const Card = ({ LocationCardProp, TempCardProp }: CardProps) => {
    return (
        <>
          <div className="card">
            <div className="card_temp">
              <Tempreture />
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