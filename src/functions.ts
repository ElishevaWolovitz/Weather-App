import {TemperatureObjProps} from './types.ts';
import {find} from 'lodash/fp';
import {TemperatureDetailsArray} from './const.ts';


export const getTemperatureObj = (temperatureVal: number): TemperatureObjProps | undefined => {
    const TemperatureDetails = find((temperatureOption: TemperatureObjProps) => temperatureOption.min <= temperatureVal && temperatureOption.max >= temperatureVal)(TemperatureDetailsArray);
    if(TemperatureDetails)
        return TemperatureDetails;
    return ({
        min: 0,
        max: 0,
        backgroundImg: { src: "", alt: "blank background" },
        icon: { src: "", alt: "blank icon" }
    })
}