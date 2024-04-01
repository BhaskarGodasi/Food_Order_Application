import express from 'express';

import { PORT } from './config';


import { connectDatabase } from './services';
import ExpressApp from './services/ExpressApp';

const StartServer = async () => {

    const app = express();

    await connectDatabase()

    await ExpressApp(app);

    app.listen(PORT, () => {
        console.log(`Listening to port ${PORT}`);
    })
}

StartServer();