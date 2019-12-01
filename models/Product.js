const mongoose = require('../database/connection');

const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    name:String,
    image:String,
    price:Number,
    description:String,
});


const ProductModel = mongoose.model('Product',ProductSchema);

module.exports = ProductModel;