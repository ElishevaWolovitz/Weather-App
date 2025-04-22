import { ImageObjProps } from "../../types";

export type CardProps = {
    location: string;
    temperature: number;
    uv: number; 
    backgroundImg: ImageObjProps; 
    icon: ImageObjProps;
  };

  export type CardDataProps = {
    location: string;
    temperature: number;
    uv: number; 
  }