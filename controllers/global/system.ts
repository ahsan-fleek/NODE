import { HttpStatusCode } from "axios";
import { Utils } from "../../utils";
import express, { Request, Response } from 'express';


const routes = express.Router();

routes.get('/health', async (req: Request, res: Response): Promise<void> => {
    Utils.apiResponse({
        res,
        code: HttpStatusCode.Ok,
        status: true,
        responseCode: '200',
        responseDescription: `Server is up & running for ${Math.floor(process.uptime())} seconds`,
    });
});


