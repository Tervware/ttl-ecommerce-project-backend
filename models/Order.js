const mongoose = require('../database/connection');

const Schema = mongoose.Schema;


const OrderSchema = new Schema({
    quantity:{type:String, default:1},
    status:{type:String, default:'pending'},
    product:{
        type:Schema.Types.ObjectId,
        ref:'Product',
        required:true

    },
    user: {
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
});


const OrderModel = mongoose.model('Order',OrderSchema);

module.exports = OrderModel;