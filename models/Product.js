const mongoose = require('../database/connection');

const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    name:{type:String},
    image:{type:String},
    price:{type:Number},
    description:{type:String},
    specification:{
        type:Schema.Types.Mixed,
       },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    }
});


const ProductModel = mongoose.model('Product',ProductSchema);

module.exports = ProductModel;