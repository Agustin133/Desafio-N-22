const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router
    .route('/').get(productController.getAll);

router
    .route('/').post(productController.addProduct);

router
    .route('/:id').put(productController.update);

router
    .route('/:id').delete(productController.deleteProduct);

router
    .route('/random').get(productController.getRandom);

router
    .route('/:id').get(productController.getById);

module.exports = router;