import { model, Schema } from 'mongoose'

const StockSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    quantity: {
        required: true,
        type: Number,
    },
    price: {
        required: true,
        type: Number,
    },
    stock: {
        type: Number,
    }
}, {
    timestamps: true
})

export default model('productStock', StockSchema)