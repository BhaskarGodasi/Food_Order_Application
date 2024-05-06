import express ,{Request,Response,NextFunction} from "express"
import { VendorProfile, UpdateVendorProfile, UpdateVendorService, VendorLogin, AddFood, GetFoods, UpdateVendorCoverImage,  } from "../controllers";
import { Authenticate } from "../middlewares/CommonAuth";
import multer from "multer";
// import { upload, uploadToCloudinary } from "../services/Cloudinary";
// import {briyani} from "../images/"

const router = express.Router()



const imageStorage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null, 'C:/Order-App/food_order_BackEnd/src/images/')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname);
    }
})

const images = multer({ storage: imageStorage}).single('images')




router.post('/login', VendorLogin);

router.use(Authenticate)
router.get('/profile', VendorProfile);
router.patch('/profile', UpdateVendorProfile);
router.patch('/coverimage', images,UpdateVendorCoverImage);
router.patch('/profile', UpdateVendorService);


// router.post('/food',images, AddFood);
router.post('/food',images, AddFood)
router.get('/foods', GetFoods);

export {router as vendorRoute}