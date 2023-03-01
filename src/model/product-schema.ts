import {
    Schema
} from 'mongoose';
import mongoose from 'mongoose';

export const Product = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId, required: false },
    productName: String,
    productCode: String,
    prodDescription: String,
    prodRating: Number,
});

const Products = mongoose.model("products", Product);
export default Products;
