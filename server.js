 const express = require('express')
const bodyParser = require('body-parser')
 const routes = require('./routes')

 const app = express();

 app.use(bodyParser.json());
 
 app.use('/', routes);

 app.use('/uploads', express.static('uploads'));

 app.use((err, req, res, next)=>{
     return res.status(500).send({message:err.message})
 })
 app.listen(3000, ()=> console.log('Server Started at Port 3000'));