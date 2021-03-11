const multer = require('multer');
const formResponse = require('./formResponse');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload/images')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
let limits= {
    filesize: 5 *1000*1000
}
let upload = multer({storage, limits})

const formUpload={
    uploadImage: (req, res, next)=>{
        const uploadedImage=upload.single('images')
        uploadedImage(req, res,(err)=>{
            if(err instanceof multer.MulterError){
                formResponse({
                    message: err.message,
                    status:400
                }, res)
            }else if(err){
                formResponse({
                    message:err.message,
                    status:400,
                }, res)
            }else{
                next()
            }
        })
    }
}
module.exports = formUpload