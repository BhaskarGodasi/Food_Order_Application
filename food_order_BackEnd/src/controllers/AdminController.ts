import {Request,Response,NextFunction} from "express"
import { CreateVandorInput } from "../dto";
import { Vandor } from "../models";
import { GeneratePassword, GenerateSalt } from "../utility";
import mongoose from "mongoose";


export const FindVendor = async (id: String | undefined, email?: string) => {

    if(email){
        return await Vandor.findOne({ email: email})
    }else{
        return await Vandor.findById(id);
    }

}

export const vendorCreator = async (req:Request,res:Response,next:NextFunction)=>{

    const { name, address, pincode, foodType, email, password, ownerName, phone }  = <CreateVandorInput>req.body;
   
    const existingVandor = await FindVendor("", email)
    if(existingVandor !== null){
        return res.json({ "message": "A vandor is exist with this email ID"})
    }

    const salt=await GenerateSalt()
    
    const userPassword = await GeneratePassword(password,salt)

    const createdVandor =  await Vandor.create({
        name,
        address,
        pincode,
        foodType,
        email,
        password:userPassword,
        salt,
        ownerName,
        phone,
        rating:0,
        serviceAvailable: false,
        coverImages: [],
        lat: 0,
        lng: 0
    })
   return res.json({createdVandor})
    

}

export const getvendors = async (req: Request, res: Response, next: NextFunction) => {

    const vendors = await Vandor.find()

    if(vendors !== null){
        return res.json(vendors)
    }

    return res.json({"message": "Vendors data not available"})
    

}



export const vendorById = async (req: Request, res: Response, next: NextFunction) => {

    const vendorId = req.params.id;

    const vendors = await FindVendor(vendorId);

    if(vendors !== null){
        return res.json(vendors)
    }

    return res.json({"message": "Vendors data not available"})

}

