import { ImageObjProps } from "../../types";

export type CardProps = {
    Location: string;
    Temperature: number;
    UV: number; 
    BackgroundImg: ImageObjProps; 
    Icon: ImageObjProps;
  };

  export type CardDataProps = {
    Location: string;
    Temperature: number;
    UV: number; 
  }