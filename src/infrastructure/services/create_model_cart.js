const mongoose = require('mongoose');

const cartCollection = 'cart';

const cartsSchema = new mongoose.Schema(
{
    title: {type: String, required: true, max: 100},
    price: {type: String, required: true, max: 100},
    stock: {type: String, required: true, max: 100},
    code: {type: String, required: true, max: 100},
    thumbnail: {type: String, required: true, max: 100},
    timestamp: {type: String, required: true, max: 100},
    description: {type: String, require: true, max: 100}
})
 
const carts = mongoose.model(cartCollection,cartsSchema);

module.exports = {
    carts
}
