const mongoose = require('mongoose');

const productCollection = 'product';

const productsSchema = new mongoose.Schema(
{
    title: {type: String, required: true, max: 100},
    price: {type: String, required: true, max: 100},
    stock: {type: String, required: true, max: 100},
    code: {type: String, required: true, max: 100},
    thumbnail: {type: String, required: true, max: 100},
    timestamp: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 100}
});
 
const products = mongoose.model(productCollection,productsSchema);

module.exports = {
    products
}
