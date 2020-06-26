const jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{

    let token = req.headers.authorization.split(' ')[1];

    let decoded = jwt.verify(token, 'MyScreteKey');

    next();

}