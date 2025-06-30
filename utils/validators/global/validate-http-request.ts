import { RequestHandler } from 'express';
import { HttpStatusCode } from 'axios';
import { Utils } from '../..';

const ValidateRequestBody: RequestHandler = (req, res, next) => {
    const methodsToCheck = ['POST', 'PUT', 'PATCH'];

    if (methodsToCheck.includes(req.method)) {
        if (!req.body || Object.keys(req.body).length === 0) {
            Utils.apiResponse({
                res,
                code: HttpStatusCode.BadRequest,
                status: false,
                responseCode: '400',
                responseDescription: `${req.method} request must contain a valid body.`,
            });
            return; // Exit after sending response
        }
    }

    next();
};

export default ValidateRequestBody;
