import express, { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv"
import multer, { Multer } from 'multer';
import { v2 as cloudinary } from 'cloudinary';


dotenv.config();

cloudinary.config({ 
  cloud_name:'dohrdhvpf' , 
  api_key:'641393424274812' , 
  api_secret: 'WH7rVbWkPSXFph9bV1Pn0rlQwyg'
});

export default cloudinary;