const express = require('express');

const ProductsController = require('../controllers/ProductsController');
const CategoriesController = require('../controllers/CategoriesController');
const router = express.Router();

router.get('/', function(req,res){
    res.send("Home");
});

// Products routes
router.get('/products', ProductsController.getProducts);
router.get('/products/:id', ProductsController.getProductById);
router.post('/products', ProductsController.createProduct);
router.patch('/products', ProductsController.updateProduct);
router.delete('/products/:id', ProductsController.deleteProduct);

//Categories routes
router.post('/categories', CategoriesController.createCategory);
router.get('/categories', CategoriesController.getCategories);


module.exports = router;