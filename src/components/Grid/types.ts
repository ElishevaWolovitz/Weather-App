import { TemperatureObjProps } from "../../types";

export type CardProps = {
    Location: string;
    Temperature: number;
    UV: number; 
    TemperatureObj: TemperatureObjProps; 
  };

  export type CardDataProps = {
    Location: string;
    Temperature: number;
    UV: number; 
  }