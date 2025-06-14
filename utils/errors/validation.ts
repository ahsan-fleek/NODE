import { ValidationError as JoiValidationError } from 'joi';
import { Utils } from '../';
import { HttpStatusCode } from 'axios';
import { Response } from 'express';

export class ValidationError extends Error {
    public details: any;

    constructor(error: JoiValidationError) {
        super(error.message);
        this.name = 'ValidationError';
        this.details = error.details;
    }


    public sendResponse(res: Response) {
        const message = this.details.map((detail: Record<string, any>) => detail.message).join('; ');
        return Utils.apiResponse({
            res,
            code: HttpStatusCode.UnprocessableEntity,
            status: false,
            responseCode: HttpStatusCode.UnprocessableEntity.toString(),
            responseDescription: message
        });
    }

}