const Product = require('../models/Product');


exports.getProducts =   (req,res)=>{

     Product.find().then(products =>{
         return res.status(200).send(products)
     }).catch(error =>{
         return res.status(400).send(error)
     })
};

exports.getProductById = (req, res) =>{
 
    Product.findById(req.params.id)
     .then( product=>{
        return res.status(200).send(product);
     }).catch(error =>{
         return res.status(400).send(error);
     })
};

exports.createProduct = (req,res)=>{
 

        Product.create(req.body).then((product)=>{
            return res.status(200).send({
                message:'Product created successfully',
                product});
        }).catch(error =>{
            return res.status(400).send(error);
        }) 
    
};

exports.updateProduct = (req,res)=>{

    res.status(200).send('This API endpoint updates a product');
};

exports.deleteProduct = (req,res)=>{
    res.status(200).send('This API endpoint deletes a product');

};


 



 
