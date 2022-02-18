const moongoose = require('mongoose');
const Schema = moongoose.Schema;

const cardsSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        orignalPrice: { type: Number, required: true },
        discountPrice: { type: Number },
        imageUrl: { type: Array, required: true },
        fabric: { type: String, required: true },
        availability: { type: String, required: true },
        quantity: { type: Number, required: true },
        category: { type: String, required: true },
        subCategory: { type: Array, required: true },
        brand: { type: String, required: true },
        skuNumber: { type: String, required: true },
        weddingWear: { type: Boolean },
        collections: { type: String },
        size: { type: Array, required: true },
    },
    {
        timestamp: true,
    }
);


const Cards = moongoose.model('Cards', cardsSchema);

module.exports = Cards;