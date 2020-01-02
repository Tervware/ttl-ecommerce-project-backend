const  multer = require('multer');

const storage = multer.diskStorage({
    
    destination:(req, file, cb) =>{
        cb(null,'./uploads')
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + '-'+file.originalname);
    }
})

const fileFilter = (req, file, cb)=>{
    if(file.mimetype =="image/jpg" || file.mimetype =="image/jpeg" || file.mimetype =="image/png"){
        cb(null, true);
    }else{
        cb(null, false);
        return cb(new Error('File must be an image'))
    }
}

const upload = multer({
    storage,
    fileFilter,
}).array('images',5);

module.exports = upload;