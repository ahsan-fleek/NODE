import { HttpStatusCode } from 'axios';
import express, { Request, Response } from 'express';
import { Utils } from '../../utils';

const routes = express.Router();

routes.all(/(.*)/, (req: Request, res: Response):void => {
    Utils.apiResponse({
        res,
        code: HttpStatusCode.NotFound,
        status: true,
        responseCode: '404',
        responseDescription: `The requested resource '${req.originalUrl}' could not be found on this server`,
    });
});

export const defaultRoutes = routes;