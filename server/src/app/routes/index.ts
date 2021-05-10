import express from 'express';


import { ProductControllers } from '../http/controllers/product.controllers'

export default class AppRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
    }

    public initiate() {

        this.router.get('/', (req, res) => {
            res.send(
                ` <h1> Well done, your server is online! </h1>
                 
                  Products=>   <a href="/api/v1/product">see all products</a> <br>
                  `

            );
        })

        this.router.use('/api/v1', this.initiateAPiVersion1())


        return this.router;
    }

    private initiateAPiVersion1() {
        let apiRouter: express.Router = express.Router();
        apiRouter.get('/product', ProductControllers.getProducts);
        return apiRouter;
    }
}
