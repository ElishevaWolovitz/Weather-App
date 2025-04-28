
 
export const getObjInRange = <T extends {min: number; max:number}>(compareVal: number, objArray: T[], defaultObj: T): T => {
    for (const element of objArray)
        {
            if (element.min <= compareVal && element.max >= compareVal)
                    return element; 
        } 
    return defaultObj;
}