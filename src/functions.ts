
 
export const findCompare = <T extends {min: number; max: number}>(compareVal: number, array: T[]): T | undefined => {
    for (const element of array)
    {
        if (element.min <= compareVal && element.max >= compareVal)
            return element;
    } 
}
export const getObjInRange = <T extends {min: number; max:number}>(compareVal: number, objArray: T[], defaultObj: T): T => {
    const objWithRange = findCompare(compareVal, objArray);
    if(objWithRange)
        return objWithRange;
    return defaultObj;
}