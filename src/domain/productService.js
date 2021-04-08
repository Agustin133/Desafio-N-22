const { response } = require("express");
const moment = require('moment');
const faker = require('faker');
const { products } = require("../infrastructure/services/create_model_prod");


async function getProductById(id) {
    const response = await products.findOne({_id: id});
    if(response == null){
        return('Product not found');
    }
    return response;
}

async function getAll() {
    const response = await products.find()
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
        const pr = await new products (item);
        pr.save();
        return 'product added successfully';
    } catch (error) {
        return error;
    }
}

async function update(id,body) {
    try{
        const pr = await products.findByIdAndUpdate(id, {$set: body});
        pr.save();
        return 'Product uploaded successfully';
    }catch(err){
        return err;
    }
}

async function deleteProduct(id) {
    try{
        await products.deleteOne({_id: id});
        return 'Product deleted successfully';
    }catch(err){
        return err;
    }
}



async function getRandom(cant) {
    
    const users = [];

    if (cant == null){
        cant = 10;
    }

    if(cant == 0){
        console.log('No files upload');
        return ('No files upload');
    }

    for(let i = 0; i < cant; i++){
        const user = {
            name: faker.name.firstName(),
            price: faker.commerce.price(),
            thumbnail: faker.image.avatar()
        }
        users.push(user);
    }
    console.log(users);
    return users;
}


module.exports = {
    getProductById,
    getAll,
    addProduct,
    update,
    getRandom,
    deleteProduct
}