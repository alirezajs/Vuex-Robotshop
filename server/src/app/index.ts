import express from 'express';
import http from 'http';

import AppRouter from './routes'

export default class Application {
    public app: express.Application;
    public port = '3001';
    constructor() {
        this.app = express();
        this.setupExpress();
        this.setConfig();
    }

    private setConfig() {
     
        const appRouter = new AppRouter();
        this.app.use(appRouter.initiate())
    }

    setupExpress() {

        const server = http.createServer(this.app);
        server.listen(this.port, () => console.log(`The application is listening on port http://localhost:${this.port}`));
    }


}

