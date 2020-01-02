const mongoose = require('../database/connection');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name:{type:String, required:true}, 
    email: {type:String, required:true, unique:true},
    phone:{type:String, required:true},
    password:{type:String, required:true},
    address:{type:String},
    role:{type:String, default:'normal'}
});


const UserModel = mongoose.model('User',UserSchema);

module.exports = UserModel;