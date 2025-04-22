import {TemperatureObjProps} from './types.ts';
import {find} from 'lodash/fp';
import {TemperatureDetailsArray} from './const.ts';
import {TemperatureDetailsBlank} from './const.ts';


export const getTemperatureObj = (temperatureVal: number): TemperatureObjProps => {
    const TemperatureDetails = find((temperatureOption: TemperatureObjProps) => 
        temperatureOption.min <= temperatureVal && temperatureOption.max >= temperatureVal)(TemperatureDetailsArray);
    if(TemperatureDetails)
        return TemperatureDetails;
    return TemperatureDetailsBlank;
}