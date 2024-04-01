import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AuthPayload, VendorPayload } from '../dto'
import { Secert_code } from '../config'
import { Request } from 'express'

export const GenerateSalt = async () => {
    return await bcrypt.genSalt()    
}


export const GeneratePassword = async (password: string, salt: string) => {

    return await bcrypt.hash(password, salt);

}


export const ValidatePassword = async (enteredPassword: string, savedPassword: string, salt: string) => {

    return await GeneratePassword(enteredPassword, salt) === savedPassword;
}


export const GenerateSignature = async (payload: AuthPayload) => {

    return jwt.sign(payload, Secert_code, { expiresIn: '90d'});
 
 }


 export const ValidateSignature  = async (req:Request) => {

    const signature = req.get('Authorization');
    console.log(signature,"signature in utility")

    if(signature){
        console.log("In if condition",signature.split(' ')[1])
        try {
            // console.log("try")
            const payload =  jwt.verify(signature.split(' ')[1], Secert_code) as AuthPayload; 
            console.log("try")
            req.user = payload;
            return true;

        } catch(err){
            console.log("in catch")
            return false
        } 
    }
    return false
};