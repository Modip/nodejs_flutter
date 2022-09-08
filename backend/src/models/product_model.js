const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    productid :{type:String, require:true, unique:true},
    productname :{type:String,require:true},
    description :{type: String}
});

const productModel = model('Product', productSchema);
module.exports = productModel;
