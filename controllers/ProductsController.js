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
    .populate('category')
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

    Product.findByIdAndUpdate(req.body.id, req.body)
    .then( ()=>{
       return Product.findById(req.body.id)
        .then( product =>{
            return res.status(200).send(product);
        })
    }).catch( error =>{
        return res.status(400).send(error)
    })
 };

exports.deleteProduct = (req,res)=>{

    Product.deleteOne({_id:req.params.id})
    .then(()=>{
        res.status(200).send('Product deleted Successfully');
    }).catch(error =>{
        return res.status(400).send(error);
    })
    
};


 



 
