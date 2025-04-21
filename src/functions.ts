import {TemperatureArrayProps} from './types.ts';
import FreezingBGImg from "./assests/backgroundImages/FreezingBGImg.jpg";
import ColdBGImg from "./assests/backgroundImages/ColdBGImg.jpg";
import NormalBGImg from "./assests/backgroundImages/NormalBGImg.jpg";
import HotBGImg from "./assests/backgroundImages/HotBGImg.jpg";
import FreezingIcon from './assests/weatherIcons/FreezingIcon.png';
import ColdIcon from './assests/weatherIcons/ColdIcon.png';
import NormalIcon from './assests/weatherIcons/NormalIcon.png';
import HotIcon from './assests/weatherIcons/HotIcon.png';


export const getTemperatureArray = (temperatureVal: number): TemperatureArrayProps => {
    switch (true) {
        case temperatureVal <= 0:
            return {min: -Infinity, max:0, backgroundImg: [FreezingBGImg, "Freezing background image"], icon: [FreezingIcon, "snowflake icon"]};
        case temperatureVal > 0 && temperatureVal < 15:
            return {min: 0, max:15, backgroundImg: [ColdBGImg, "Cold background image"], icon: [ColdIcon, "cloud icon"]};
        case temperatureVal >= 15 && temperatureVal < 30:
            return {min: 15, max:30, backgroundImg: [NormalBGImg, "Normal temp background image"], icon: [NormalIcon, "sun icon"]};
        default:
            return {min:30, max: Infinity, backgroundImg: [HotBGImg, "Hot background image"], icon: [HotIcon, "thermometer icon"]};
    }
}
