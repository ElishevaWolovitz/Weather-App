import {TemperatureObjProps} from './types.ts';
import FreezingBGImg from "./assests/backgroundImages/FreezingBGImg.jpg";
import ColdBGImg from "./assests/backgroundImages/ColdBGImg.jpg";
import NormalBGImg from "./assests/backgroundImages/NormalBGImg.jpg";
import HotBGImg from "./assests/backgroundImages/HotBGImg.jpg";
import FreezingIcon from './assests/weatherIcons/FreezingIcon.png';
import ColdIcon from './assests/weatherIcons/ColdIcon.png';
import NormalIcon from './assests/weatherIcons/NormalIcon.png';
import HotIcon from './assests/weatherIcons/HotIcon.png';


export const getTemperatureObj = (temperatureVal: number): TemperatureObjProps => {
    switch (true) {
        case temperatureVal <= 0:
            return {min: -Infinity, max:0, backgroundImg: {src: FreezingBGImg, alt: "Freezing background image"}, icon: {src: FreezingIcon, alt: "snowflake icon"}};
        case temperatureVal > 0 && temperatureVal < 15:
            return {min: 0, max:15, backgroundImg: {src: ColdBGImg, alt: "Cold background image"}, icon: {src: ColdIcon, alt: "cloud icon"}};
        case temperatureVal >= 15 && temperatureVal < 30:
            return {min: 15, max:30, backgroundImg: {src:NormalBGImg, alt:"Normal temp background image"}, icon: {src: NormalIcon, alt: "sun icon"}};
        default:
            return {min:30, max: Infinity, backgroundImg: {src: HotBGImg, alt: "Hot background image"}, icon: {src: HotIcon, alt: "thermometer icon"}};
    }
}
