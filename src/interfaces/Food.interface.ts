import { Document } from "mongoose";

export interface IFood extends Document {
  name: string;
  thumbnails: string[];
  description: string;
  price_per_unit: number;
}
