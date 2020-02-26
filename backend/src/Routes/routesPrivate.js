const express = require('express');
const routes = express.Router();

const CategoryController = require('../controllers/CategoryController');
const ProductController = require('../controllers/ProductController');
const CartController = require('../controllers/CartController');

routes.post('/category' , CategoryController.store);
routes.delete('/category/:id' , CategoryController.destroy);

routes.put('/products/:id' , ProductController.update);
routes.post('/products' , ProductController.store);
routes.delete('/products/:id' , ProductController.destroy);

routes.put('/cart/:id' , CartController.update);

module.exports = routes;