import FreezingBGImg from "../../assests/backgroundImages/FreezingBGImg.jpg";
import ColdBGImg from "../../assests/backgroundImages/ColdBGImg.jpg";
import NormalBGImg from "../../assests/backgroundImages/NormalBGImg.jpg";
import HotBGImg from "../../assests/backgroundImages/HotBGImg.jpg";
import FreezingIcon from '../../assests/weatherIcons/FreezingIcon.png';
import ColdIcon from '../../assests/weatherIcons/ColdIcon.png';
import NormalIcon from '../../assests/weatherIcons/NormalIcon.png';
import HotIcon from '../../assests/weatherIcons/HotIcon.png';
import { TemperatureObjProps } from "./types";


export const CardData = [
    { location: "Tel Aviv", temperature: 25, uv: 8 },
    { location: "Johannesburg", temperature: 6, uv: 4 },
    { location: "Antarctica", temperature: -5, uv: 0 },
    { location: "Texas", temperature: 31, uv: 12 },
  ];

export const TemperatureDetailsFreezing: TemperatureObjProps = {
    min: -Infinity, 
    max: 0, 
    backgroundImg: {
        src: FreezingBGImg, 
        alt: "Freezing background image"
    },
    icon: {
        src: FreezingIcon, 
        alt: "snowflake icon"
    } 
}
export const TemperatureDetailsCold: TemperatureObjProps = {
    min: 0, 
    max: 15, 
    backgroundImg: {
        src: ColdBGImg, 
        alt: "Cold background image"
    },
    icon: {
        src: ColdIcon, 
        alt: "rain icon"
    } 
}

export const TemperatureDetailsNormal: TemperatureObjProps = {
    min: 15, 
    max: 30, 
    backgroundImg: {
        src: NormalBGImg, 
        alt: "Normal temp background image"
    },
    icon: {
        src: NormalIcon, 
        alt: "sun icon"
    } 
}
export const TemperatureDetailsHot: TemperatureObjProps = {
    min: 30,
    max: Infinity,
    backgroundImg: {
        src: HotBGImg,
        alt: "Hot background image"
    },
    icon: {
        src: HotIcon,
        alt: "thermometer icon"
    }
}
export const TemperatureDetailsBlank: TemperatureObjProps = {
    min: 0,
    max: 0,
    backgroundImg: { src: "", alt: "blank background" },
    icon: { src: "", alt: "blank icon" }
}

export const TemperatureDetailsArray:TemperatureObjProps[] = [
    TemperatureDetailsFreezing, 
    TemperatureDetailsCold, 
    TemperatureDetailsNormal, 
    TemperatureDetailsHot
]