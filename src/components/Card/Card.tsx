import Tempreture  from "../Tempreture";
import UV from "../UV";
import LocationBar  from "../LocationBar";


const Card = () => {
    return (
        <>
          <div className="card">
            <Tempreture />
            <UV />
            <LocationBar />
          </div>  
        </>
    )
}

export { Card };