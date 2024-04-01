import express ,{Request,Response,NextFunction} from "express"
import { getvendors, vendorById, vendorCreator } from "../controllers"

const router = express.Router()

router.post("/vendor" , vendorCreator)
router.get("/vendor",getvendors)
router.get("/vendor/:id",vendorById)

router.get("/",(req:Request,res:Response,next:NextFunction)=>{

    res.json({message:"Hello from Adminrouter"})

})

export {router as AdminRoute}