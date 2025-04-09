import freezing from "../../assests/backgroundImages/Freezing.jpg";
import cold from "../../assests/backgroundImages/Cold.jpg";
import normal from "../../assests/backgroundImages/Normal.jpg";
import hot from "../../assests/backgroundImages/Hot.jpg";

const getBackgroundImage = (TempProp: number): [string, string] => {
    if (TempProp >= 30) {
        return [hot, "Hot background image"];
    } else if (TempProp >= 15) {
        return [normal, "Normal temp background image"];
    } else if (TempProp > 0) {
        return [cold, "cold background image"];
    } else {
        return [freezing, "freezing background image"];
    }
};

export { getBackgroundImage };