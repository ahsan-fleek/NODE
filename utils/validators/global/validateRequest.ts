import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
import { HttpStatusCode } from 'axios';
import { Utils } from '../..';



export const validateRequest = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      Utils.apiResponse({
        res,
        code: HttpStatusCode.BadRequest,
        status: false,
        responseCode: '400',
        responseDescription: 'Validation failed',
        data: error.details.map((detail) => detail.message),
      });
      return;
    }
    next();
  };
};
