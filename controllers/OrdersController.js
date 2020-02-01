const Order = require('../models/Order');


exports.createOrder = (req,res)=>{

    Order.create(req.body)
    .then(order => 
        res.status(200).send({message:"Order placed successfully"})
    )
    .catch(error =>{
        return res.status(400).send({message:'could not place order'});
    })
}

exports.getOrders = (req,res)=>{

    Order.find()
    .populate('user product')
    .then(orders => {
         return res.status(200).send({orders});
    })
    .catch(error =>{
        return res.status(400).send({message:'could not retrieve orders'});
    })
}

exports.updateOrderStatus = (req, res) =>{

    Order.findByIdAndUpdate(req.body._id, {
        status:req.body.status
    }).then(order => {
        return res.status(200).send({message:'Order status updated successfully'})
    }).catch(error =>{
        return res.status(400).send({message:'could not update status'});
    })
}
