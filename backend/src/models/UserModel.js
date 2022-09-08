const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstName:String,
    lastName: String,
    avatar: String,
    addedon:{ type:Date, default:Date.now}
});

module.exports = model('User', userSchema);
