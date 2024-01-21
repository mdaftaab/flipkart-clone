import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true
        },
        url: {
            type: String,
            required: true
        },
        detailUrl: {
            type: String,
            required: true
        },
        title: Object,
        price: Object,
        quantity: {
            type: Number,
            default: 0
        },
        description: {
            type: String
        },
        discount: {
            type: String
        },
        tagline: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("product", productSchema);
export default Product;