import {TemperatureDetailsObjProps} from './types.ts';
import {find} from 'lodash/fp';
import {TemperatureDetailsArray} from './const.ts';


export const getTemperatureObj = (temperatureVal: number): TemperatureDetailsObjProps | undefined => {
    const TemperatureDetails = find((temperatureOption: TemperatureDetailsObjProps) => temperatureOption.min <= temperatureVal && temperatureOption.max >= temperatureVal)(TemperatureDetailsArray);
    return TemperatureDetails; 
}