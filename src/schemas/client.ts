import { Schema } from "mongoose";

export const clientSchema = new Schema({
    
  name: { type: String },
  dni: { type: String },
  phone: { type: Number },
  email: { type: String },
},
{
  versionKey: false // You should be aware of the outcome after set to false
});