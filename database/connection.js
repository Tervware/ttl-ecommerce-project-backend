
 const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ttl_ecommerce', {
     useNewUrlParser: true,
     useUnifiedTopology: true
  });

  const db = mongoose.connection;

  
  db.once("open", () => {
    console.log("> successfully opened the database");
});

 db.on("error", () => {
      console.log("> error occurred from the database");
  });
  
  module.exports = mongoose;