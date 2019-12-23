const Category = require('../models/Category');

exports.createCategory = (req,res) =>{
    const categories = req.body
    Category.insertMany(categories)
    .then(catResults=>{

        return res.status(200).send({
            message:'Categories created successfully',
            categories:catResults
        })
    }).catch(error =>{
        return res.status(400).send({
            message:'Failed to create categories',
            error
        }) 
    })
}

exports.getCategories = (req, res)=>{
    Category.find().then( categories =>{
        return res.status(200).send(categories)
    }).catch(error =>{
        return res.status(400).send(error);
    })
}
