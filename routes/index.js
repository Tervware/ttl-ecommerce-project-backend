const express = require('express');

const ProductsController = require('../controllers/ProductsController');
const CategoriesController = require('../controllers/CategoriesController');
const UserController = require('../controllers/UserController');
const OrdersController = require('../controllers/OrdersController');
const router = express.Router();

const Upload = require('../middleware/Upload')
const auth = require('../middleware/Authentication')

router.get('/', function(req,res){
    res.send("Home");
});

// Products routes
router.get('/products', ProductsController.getProducts);
router.get('/products/:id', ProductsController.getProductById);
router.post('/products',auth, Upload, ProductsController.createProduct);
router.patch('/products',auth, ProductsController.updateProduct);
router.delete('/products/:id', ProductsController.deleteProduct);

//Categories routes
router.post('/categories', CategoriesController.createCategory);
router.get('/categories', CategoriesController.getCategories);

//Auth routes
router.post('/users', UserController.signup); 
router.post('/login', UserController.login); 

//Order routes
router.post('/orders', OrdersController.createOrder); 
router.get('/orders', OrdersController.getOrders);  
router.patch('/orders/status', OrdersController.updateOrderStatus);  


module.exports = router;