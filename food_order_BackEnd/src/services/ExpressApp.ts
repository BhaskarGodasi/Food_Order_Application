import express , { Application } from 'express';
import path from 'path';
import cors from 'cors'
import {AdminRoute, CoustmerRoute, ShoppingRoute, vendorRoute} from '../routes'


 

export default async(app: Application) => {

    app.use(express.json());
    app.use(cors())
    app.use(express.urlencoded({ extended: true}))
    
 
    const imagePath = path.join(__dirname,'../images');
    
    app.use('/images', express.static(imagePath));
    
    app.use('/admin', AdminRoute);
    app.use("/vendor",vendorRoute)
    app.use('/customer', CoustmerRoute)
    // app.use('/delivery', DeliveryRoute);
    app.use(ShoppingRoute);

    return app;

}

  