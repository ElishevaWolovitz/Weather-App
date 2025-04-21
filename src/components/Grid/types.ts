import { TemperatureArrayProps } from "../../types";

export type CardProps = {
    Location: string;
    Temperature: number;
    UV: number; 
    TemperatureArray: TemperatureArrayProps; 
  };

  export type CardDataProps = {
    Location: string;
    Temperature: number;
    UV: number; 
  }