import { Schema } from "mongoose";

export const purchaseSchema = new Schema({
    id: String,
    name: String,
    description: String
});