const mongoose = require('mongoose');

const order = new mongoose.Schema({
    cartItems:Array,
    amount:String,
    status:String,
    createdAt:Date
})

const createOrder = mongoose.model('Order',order);

module.exports = createOrder;