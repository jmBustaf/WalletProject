import { Document } from "mongoose";

export interface IClient extends Document {
    /* id: string */    
    name: string;
    dni: string;
    phone: number;
    email: string;
}