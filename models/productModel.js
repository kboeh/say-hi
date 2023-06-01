import { Schema, model, models } from "mongoose"

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetable', 'diary']
    }
})

const Product = models.Product || model('Product', productSchema);

module.exports = Product;