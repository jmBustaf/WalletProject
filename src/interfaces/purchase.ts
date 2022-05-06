import { Document } from "mongoose"

export interface IPurchase extends Document {
    id: string,
    name: string,
    description: string
  }