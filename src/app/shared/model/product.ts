import { image } from "./image";

export interface product {
    id:number;
    name: string;
    price: number;
    amount: number;
    description: string;
    image:image;
  }
  