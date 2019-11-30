const express = require('express');

const ProductsController = require('../controllers/ProductsController')

const router = express.Router();

router.get('/', function(req,res){
    res.send("Home");
});

router.get('/products', ProductsController.getProducts);
router.get('/products/:id', ProductsController.getProductById);
router.post('/products', ProductsController.createProduct);
router.patch('/products', ProductsController.updateProduct);
router.delete('/products/:id', ProductsController.deleteProduct);


module.exports = router;