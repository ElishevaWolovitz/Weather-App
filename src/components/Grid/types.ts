

  export type CardDataProps = {
    location: string;
    temperature: number;
    uv: number; 
  }

  export type TemperatureObjProps = {
    min: number; 
    max: number; 
    backgroundImg: ImageObjProps
    icon: ImageObjProps
}
export type ImageObjProps = {
    src: string; 
    alt: string; 
}