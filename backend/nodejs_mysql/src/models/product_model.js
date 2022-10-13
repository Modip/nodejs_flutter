const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    productid :{type:String, required:true, unique:true},
    productname :{type:String, required:true},
    description :{type: String},
    addedon : {type: Date, default: Date.now},
});

const productModel = model('Product', productSchema);
module.exports = productModel;
