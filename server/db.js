import mongoose from "mongoose";
import { Schema, Types } from "mongoose";

const productSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    imageUrl: String,
    type: String
}, {
    timestamps: true
})

const productModel = mongoose.model('product', productSchema)

export default productModel