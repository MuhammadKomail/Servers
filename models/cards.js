const moongoose = require('mongoose');
const Schema = moongoose.Schema;

const cardsSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        orignalPrice: { type: Number, required: true },
        discountPrice: { type: Number },
        imageUrl1: { type: String, required: true },
        imageUrl2: { type: String, required: true },
        fabric: { type: String },
        availability: { type: String, required: true },
        quantity: { type: Number, required: true },
        category: { type: String, required: true },
        subCategory: { type: String, required: true },
        brand: { type: String },
        skuNumber: { type: String, required: true },
        weddingWear: { type: String },
        collections: { type: String },
        newArrival: { type: String },
        smallSize: { type: String},
        mediumSize: { type: String },
        largeSize: { type: String },
        extralargeSize: { type: String }
    },
    {
        timestamp: true,
    }
);

const Cards = moongoose.model('Cards', cardsSchema);

module.exports = Cards;