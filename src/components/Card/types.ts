import { ImageObjProps } from "../../types";

export type CardProps = {
    location: string;
    temperature: number;
    uv: number; 
    backgroundImg: ImageObjProps; 
    icon: ImageObjProps; 
  };