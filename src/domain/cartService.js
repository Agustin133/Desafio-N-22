const { response } = require("express");
const moment = require('moment');
const { carts } = require("../infrastructure/services/create_model_cart");



async function getProductById(id) {
    const response = await carts.findOne({_id: id});
    if(response == null){
        console.log('Product not found');
    }
    return response;
}

async function getAll() {
    const response = await carts.find()
    return response;
}

async function addProduct(body) {
    let timestamp = moment().format('lll');
    const { title, price, thumbnail, code, stock, description } = body;
    const item = {
        title,
        price,
        stock,
        code,
        thumbnail,
        timestamp,
        description
    }
    try {
        const cr = await new carts (item);
        cr.save();
        return 'product added successfully';
    } catch (error) {
        return error;
    }
}


async function deleteProduct(id) {
    try{
        await carts.deleteOne({_id: id});
        return 'Product deleted successfully';
    }catch(err){
        return err;
    }
}

module.exports = {
    getProductById,
    getAll,
    addProduct,
    deleteProduct
}