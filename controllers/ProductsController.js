
exports.getProducts =   (req,res)=>{

     let products = [
        {
            img:'htt',
            name:'Phone', 
            price:20000,
            description:'my description'
        },
        {
            img:'htt',
            name:'Phone', 
            price:20000,
            description:'my description'
        },
        {
            img:'htt',
            name:'Phone', 
            price:20000,
            description:'my description'
        },
        {
            img:'htt',
            name:'Phone', 
            price:20000,
            description:'my description'
        },
        {
            img:'htt',
            name:'Phone', 
            price:20000,
            description:'my description'
        },
        {
            img:'htt',
            name:'Phone', 
            price:20000,
            description:'my description'
        },
        {
            img:'htt',
            name:'Phone', 
            price:20000,
            description:'my description'
        },

     ]


    res.send(products);
};

exports.getProductById = (req, res) =>{

    res.status(200).send('Get product by id here');

};

exports.createProduct = (req,res)=>{

    res.status(200).send('Create product here');
};

exports.updateProduct = (req,res)=>{

    res.status(200).send('This API endpoint updates a product');
};

exports.deleteProduct = (req,res)=>{
    res.status(200).send('This API endpoint deletes a product');

};


 



 
