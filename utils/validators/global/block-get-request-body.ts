import { RequestHandler } from 'express';
import { Utils } from '../..';
import { HttpStatusCode } from 'axios';

const BlockGetRequestBody: RequestHandler = (req, res, next) => {
    if (req.method === 'GET' && req.body && Object.keys(req.body).length > 0) {
        Utils.apiResponse({
            res,
            code: HttpStatusCode.BadRequest,
            status: false,
            responseCode: '400',
            responseDescription: 'GET request should not contain a request body.'
        });
        return; 
    }
    next();
};

export default BlockGetRequestBody;
