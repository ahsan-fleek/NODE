import { HttpStatusCode } from "axios";
import { Utils } from "../../utils";
import { Request, Response } from 'express';


const SystemController = {
    health: (req: Request, res: Response): void => {
        Utils.apiResponse({
            res,
            code: HttpStatusCode.Ok,
            status: true,
            responseCode: '200',
            responseDescription: `Server is up & running for ${Math.floor(process.uptime())} seconds`,
        });
    },
};

export default SystemController;