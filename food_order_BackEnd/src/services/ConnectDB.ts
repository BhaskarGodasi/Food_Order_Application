import { MONGO_URI } from "../config"
import mongoose from 'mongoose';
// const mongoose = require('mongoose')

export const connectDatabase = async () => {
    try {      
        await mongoose.connect(MONGO_URI)
        console.log('Connected to mongodb database successfully!')
    } catch (err) {
        console.log(err)
    }
}
// connectDatabase()