import { Request, Response, NextFunction  } from 'express';
import { CustomError } from '../errors/custom';
import { ValidationError } from '../errors/validation';
import { Utils } from '../';
import { HttpStatusCode } from 'axios';

export const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction ): void => {

    if (err instanceof CustomError)  {
        err.sendResponse(res);
    }

    else if (err instanceof ValidationError) {
        err.sendResponse(res);
    }

    else if (err instanceof SyntaxError && 'body' in err) {
        Utils.apiResponse({
            res,
            code: HttpStatusCode.BadRequest,
            status: false,
            responseCode: '400',
            responseDescription: 'Malformed Request! Invalid JSON'
        });
    }

    else {
        Utils.apiResponse({
            res,
            code: HttpStatusCode.InternalServerError,
            status: false,
            responseCode: '500',
            responseDescription: 'Ops! Something went wrong. Please try again later'
        });
    }
}

export default ErrorHandler;