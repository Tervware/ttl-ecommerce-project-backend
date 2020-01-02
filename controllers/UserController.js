const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

exports.signup = (req, res)=>{

    let password = bcrypt.hashSync(req.body.password, 10);

    User.findOne({email:req.body.email})
    .then(user =>{
        if(user){
            return res.status(400).send({message:'User already exists'})
        }

        User.create({
            name:req.body.name,
            email:req.body.email,
            password:password,
            phone:req.body.phone,
            address:req.body.address,
            role:req.body.role
        }).then(newuser =>{
            return res.status(200).send({message:'User created successfully'})
        })

    }).catch(error =>{
        return res.status(400).send({message:'Could not save user'})
    })

}

exports.login = (req, res)=>{

    User.findOne({email:req.body.email})
    .then(user =>{
        if(!user){
            return res.status(400).send({message:'Auth failed'})
        }

        let password = bcrypt.compareSync(req.body.password, user.password);
         if(!password){
            return res.status(400).send({message:'Auth failed'})
         }

         let token = jwt.sign({
             userId:user._id,
             email:user.emal,
         },
         'MyScreteKey',
         {
             expiresIn:'24h'
         }
         )
         return res.status(200).send({
             message:'Login successful',
             token,
             _id:user._id,
             name:user.name,
             phone:user.phone,
             address:user.address,
             role:user.role
            })

    })
    .catch(error =>{
        return res.status(400).send({message:'Auth failed'})
    })

}