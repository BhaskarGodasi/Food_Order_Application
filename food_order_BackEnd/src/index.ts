import express from 'express';

import { PORT } from './config';
import cors from 'cors'

import { connectDatabase } from './services';
import ExpressApp from './services/ExpressApp';
import dotenv from 'dotenv';

dotenv.config()
const port = process.env.PORT || 5000
const StartServer = async () => {

    const app = express();
   app.use(cors())
    await connectDatabase()
    
    await ExpressApp(app);

    app.listen(port, () => {
        console.log(`Listening to port ${port}`);
    })
}

StartServer();