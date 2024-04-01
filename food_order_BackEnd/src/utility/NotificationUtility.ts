import { Twilio_accountSid, Twilio_authToken } from "../config";



export const GenerateOtp = () => {

    const otp = Math.floor(10000 + Math.random() * 900000);
    let expiry = new Date()
    expiry.setTime(new Date().getTime() + (30 * 60 * 1000));

    return {otp, expiry};
}



export const onRequestOTP = async(otp: number, toPhoneNumber: string) => {

    try {
        const accountSid = Twilio_accountSid;
        const authToken = Twilio_authToken;
        const client = require('twilio')(accountSid, authToken);
    console.log(otp, toPhoneNumber,"phomemnu")
        const response = await client.messages.create({
            body: `Your OTP is ${otp}`,
            from: '+16502620768',
            to:`+91${toPhoneNumber}`
            // to: `recipient_countrycode${toPhoneNumber}` // recipient phone number // Add country before the number
            
        })
    
        return response;
    } catch (error){
        return false
    }
    
}